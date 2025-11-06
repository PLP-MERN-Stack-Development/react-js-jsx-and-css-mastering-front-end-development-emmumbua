React + Tailwind CSS Assignment
 Project Overview

This project is a React application built using Vite, Tailwind CSS, and follows a modular structure. The application includes reusable UI components, state management using React hooks and Context API, API integration, dark/light mode support, and responsive design.

 Features Implemented

 React setup using Vite

 Tailwind CSS configuration for styling

 File and folder structure as required

 Reusable components (Navbar, Footer, Button, Card)

 Theme switching (Light/Dark mode) using Context API

 Task Manager with CRUD functionalities (Add, Delete, Complete, Filter)

 Custom Hook useLocalStorage to persist tasks

 API integration using JSONPlaceholder

 Responsive design for mobile, tablet, and desktop

 Project Structure
src/
├── api/               # API functions
├── components/        # Reusable UI components (Navbar, Button, Card, Footer)
├── context/           # ThemeContext for light/dark mode
├── hooks/             # Custom hooks like useLocalStorage
├── pages/             # Pages (Home, Tasks, API Data)
├── utils/             # Helper functions
├── App.jsx            # Main app logic and routing
├── main.jsx           # Root render wrapped in ThemeProvider
└── index.css          # Tailwind CSS setup
 Tech Stack
Technology	Purpose
React + Vite	Frontend framework & bundler
Tailwind CSS	Styling and responsiveness
React Router	Navigation between pages
Context API	Theme management (Light/Dark)
JSONPlaceholder	API integration (Fake data)
 Installation & Setup
1. Clone the repository
git clone <your-repo-url>
cd <project-folder>
2. Install dependencies
npm install
3. Run the development server
npm run dev
4. Build for production
npm run build
 Tailwind CSS Setup

Ensure the following in your tailwind.config.js:

content: [
  "./index.html",
  "./src/**/*.{js,jsx}"
],

Add this to index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;
 Theme (Dark/Light Mode)

Implemented using Context API:

Theme is stored in localStorage

Toggle button is available in the Navbar

src/context/ThemeContext.jsx

 Task Manager Functionalities

✔ Add new tasks ✔ Mark tasks as complete ✔ Delete tasks ✔ Filter tasks (All, Active, Completed) ✔ Stored using useLocalStorage

 API Integration

Data fetched from: https://jsonplaceholder.typicode.com/posts

Displayed in list/grid format

Includes loading and error states

Includes search and pagination support


This project can be deployed using:

Vercel

Netlify

GitHub Pages

Example (Vercel):
npm install -g vercel
vercel
 Resources

React Docs: https://reactjs.org/

Tailwind CSS Docs: https://tailwindcss.com/

Vite Docs: https://vitejs.dev/

React Router Docs: https://reactrouter.com/

JSONPlaceholder API: https://jsonplaceholder.typicode.com/

 Author

Eunitah Mumbua
Student, PLP MERN Stack Development