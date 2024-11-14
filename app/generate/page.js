"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Generate = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(searchParams.get("handle"));
  const [pic, setpic] = useState("");
  const [desc, setdesc] = useState("");

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i == index) {
          return { link, linktext };
        } else {
          return item;
        }
      });
    });
  };

  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]));
  };

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links: links,
      handle: handle,
      pic: pic,
      desc: desc,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions);
    const result = await r.json();
    if (result.success) {
      toast.success(result.message);
      setLinks([]);
      setpic("");
      sethandle("");
      setdesc("");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="bg-[#E9C0E9] min-h-screen grid grid-cols-2 justify-center">
      <div className="flex flex-col items-center justify-center text-gray-900 col1 mt-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <Link href={"/"}>
              <svg
                className="h-10 w-10 bg-[#ca9eca] p-[10px] justify-center rounded-full hover:scale-105"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M177.5 98c-8.8-3.8-19-2-26 4.6l-144 136C2.7 243.1 0 249.4 0 256s2.7 12.9 7.5 17.4l144 136c7 6.6 17.2 8.4 26 4.6s14.5-12.5 14.5-22l0-88 288 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-288 0 0-88c0-9.6-5.7-18.2-14.5-22z" />
              </svg>
            </Link>{" "}
            Create your Linktree
          </h1>
          <div className="flex flex-col gap-5 my-6">
            <div className="item">
              <h2 className="font-semibold text-2xl">
                Step 1: Claim your Handle
              </h2>
              <div className="mx-4">
                <input
                  value={handle || ""}
                  onChange={(e) => {
                    sethandle(e.target.value);
                  }}
                  className="px-4 py-2 my-3 focus:outline-pink-500 rounded-full"
                  type="text"
                  placeholder="Choose a Handle"
                  required
                />
              </div>
            </div>
            <div className="item">
              <h2 className="font-semibold text-2xl">Step 2: Add Links</h2>
              {links &&
                links.map((item, index) => {
                  return (
                    <div key={index} className="mx-4">
                      <input
                        value={item.linktext || ""}
                        onChange={(e) => {
                          handleChange(index, item.link, e.target.value);
                        }}
                        className="px-4 py-2 mx-2 my-3 focus:outline-pink-500 rounded-full"
                        type="text"
                        placeholder="Enter Preferred Link Text"
                        required
                      />
                      <input
                        value={item.link || ""}
                        onChange={(e) => {
                          handleChange(index, e.target.value, item.linktext);
                        }}
                        className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full"
                        type="text"
                        placeholder="Enter your Social Link"
                        required
                      />
                    </div>
                  );
                })}
              <button
                onClick={() => addLink()}
                className="p-5 py-2 mx-2 bg-slate-900 text-white font-bold rounded-3xl hover:bg-slate-800 hover:scale-105"
              >
                + Add Link
              </button>
            </div>

            <div className="item">
              <h2 className="font-semibold text-2xl">
                Step 3: Add Picture and Description
              </h2>
              <div className="mx-4 flex flex-col">
                <input
                  value={pic || ""}
                  onChange={(e) => {
                    setpic(e.target.value);
                  }}
                  className="px-4 py-2 mx-2 my-3 focus:outline-pink-500 rounded-full"
                  type="text"
                  placeholder="Enter link to your Picture"
                  required
                />
                <input
                  value={desc || ""}
                  onChange={(e) => {
                    setdesc(e.target.value);
                  }}
                  className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full"
                  type="text"
                  placeholder="Enter description"
                />
                <div className="flex flex-col">
                  <button
                    disabled={
                      pic == "" || handle == "" || links[0].linktext == ""
                    }
                    onClick={() => {
                      submitLinks();
                    }}
                    className="disabled:bg-slate-500 disabled:cursor-not-allowed p-5 py-2 mx-2 w-fit my-5 bg-slate-900 text-white font-bold rounded-3xl hover:scale-105"
                  >
                    Create your Linktree
                  </button>
                  <h2 className="font-semibold text-2xl justify-center">
                    Visit Your Linktree:
                  </h2>
                  <Link
                    disabled={handle === "" || links[0].linktext === ""}
                    className={`${
                      handle === "" || links[0].linktext === ""
                        ? "hidden"
                        : "block"
                    } text-[#502274] cursor-pointer font-semibold text-xl mx-3 mt-2 hover:scale-105 `}
                    href={`http://localhost:3000/${handle}`}
                  >
                    http://localhost:3000/{handle}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col2 w-full h-screen bg-[#E9C0E9] justify-center mt-5">
        <img
          className="object-cover h-full w-full bg-cover"
          src="/generate.png"
          alt="Generate your links"
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Generate;
