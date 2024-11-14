import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function Page({ params }) {
  const handle = (await params).handle;
  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("links");

  // If the handle is already claimed, you cannot create the linktree
  const item = await collection.findOne({ handle: handle });
  if (!item) {
    return notFound();
    toast.error(
      "Handle not found or already claimed by someone else Please Try again!"
    );
  }

  const item2 = {
    _id: {
      $oid: "673131c8e3ffb02058cc219a",
    },
    links: [
      {
        link: "https://www.linkedin.com/in/shjz",
        linktext: "linkedin",
      },
    ],
    handle: "shjz1",
    pic: "https://avatars.githubusercontent.com/u/52501040?v=4",
    desc: "Frontend Web Developer",
  };
  return (
    <div className="flex min-h-screen justify-center items-start py-10 bg-gradient-to-r from-[#22c1c3] to-[#2dfd8e]">
      {item && (
        <div className="photo flex justify-center flex-col items-center gap-4 text-white">
          <img
            className="rounded-full w-[96px] h-[96px] object-fit"
            src={item.pic}
            alt="user image"
          />
          <span className="font-bold text-xl">@{item.handle}</span>
          <span className="desc w-80 text-center text-lg font-semibold">
            {item.desc}
          </span>
          <div className="links">
            {item.links.map((item, index) => {
              return (
                <Link className="text-purple-600" key={index} href={item.link}>
                  <div className="bg-purple-100 font-semibold text-lg py-4 shadow-lg px-2 min-w-96 w-full flex justify-center rounded-full my-3 hover:scale-105 hover:text-[#b264e0]">
                    {item.linktext}
                  </div>
                </Link>
              );
            })}
            <Link href="/" className="text-black">
              <div className="bg-[#c7c8cb] font-semibold text-sm py-4 my-10 shadow-lg px-2 flex justify-center rounded-full hover:scale-105 hover:bg-white">
                Join {handle} on Linktree
              </div>
            </Link>
          </div>
        </div>
      )}
      <svg
        className="lucide lucide-ellipsis h-10 w-10 bg-[#afafaf] rounded-full cursor-pointer p-[10px] hover:scale-105 hover:bg-bg-light-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>

      <ToastContainer />
    </div>
  );
}
