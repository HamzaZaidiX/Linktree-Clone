# Linktree Clone with Next.js nd MongoDB 🌐

## Intro 📝

This project is a clone of the popular Linktree platform, built using Next.js, MongoDB and Tailwind CSS. It allows users to create and manage their own personalized linktree pages. 🌟

## Features 🌟

- User-friendly interface for creating and managing linktree pages 💻
- Ability to add custom links, descriptions, and pictures 📷
- Responsive design using Tailwind CSS 🎨
- Real-time notifications using React-Toastify 🔔
- Backend API built with Next.js and MongoDB 🗄️

### Demo Website Click Here!

## Materials Used 🛠️

- Next.js: A React framework for building server-side rendered applications ⚛️
- MongoDB: A NoSQL database for storing user data 🍃
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs 🌈
- React-Toastify: A React component for displaying toast notifications 🍞

## Screenshots 📸


## Getting Started 🏁

1. Clone the repository: `git clone https://github.com/HamzaZaidiX/linktree-clone.git`
2. Install dependencies: `npm install`
3. Create a `.env.local` file in the root directory and add your MongoDB connection string:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/linktree-clone?retryWrites=true&w=majority
```

4. Start the development server: `npm run dev`

## Working 🔄

- The frontend is built using Next.js and Tailwind CSS.
- The backend is built using Next.js API routes and MongoDB.
- The `pages/index.js` file renders the homepage, while the `pages/generate.js` file renders the generate page.
- The `components/Linktree.js` file is a reusable component for displaying linktree pages.
- The `api/add.js` file handles the API endpoint for adding new linktree pages to the database.

## License 📜

This project is licensed under the MIT License. Feel free to use and modify it as per your needs.

:octocat: :sparkles: :rocket: Happy coding! :rocket: :sparkles: :octocat: