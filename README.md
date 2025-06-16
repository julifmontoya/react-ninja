# 🚀 Learning React for noob Users
We’ll build a simple React app using Vite, TailwindCSS, and basic components/pages.

Folder Structure
```
├── public/             # Static assets (favicon, images, etc.)
├── src/                # All the source code
│   ├── assets/         # Images, logos, global styles (optional)
│   ├── components/     # Reusable UI blocks (e.g., Navbar, Button)
│   ├── pages/          # Page components (e.g., Home, About, Events)
│   ├── services/       # Functions to call APIs or external services
│   ├── hooks/          # Custom hooks (e.g., useFetch, useForm)
│   ├── context/        # Global state (e.g., AuthContext, ThemeContext)
│   ├── utils/          # Helper functions (e.g., formatDate, capitalize)
│   ├── App.jsx         # Main app component with routes
│   ├── main.jsx        # Entry point (calls <App />)
│   └── index.css       # TailwindCSS or global styles
│
├── .env                # Environment variables (API keys, secrets)
├── Dockerfile          # To run the app in a container
├── vite.config.js      # Vite configuration
├── package.json        # Project dependencies
└── README.md           # Project info
```

## 1. Create React App (with Vite)
```
npm create vite@latest
npm run dev
npm install react-router react-router-dom
```

## 2. Install tailwindcss
```
npm install tailwindcss @tailwindcss/vite
```

## 3.  Configure TailwindCSS
In vite.config.js
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```
In src/index.css (or create it), add:

```
@import "tailwindcss";
```

## 4. What is a Component?
A component is a reusable piece of code that returns some UI (like text, buttons, or layouts). It's like a small building block of a website.

```
function Welcome() {
  return <h1>Hello, bro!</h1>;
}

export default Welcome;
```

📁 Create a folder named components/ to organize them

Navbar.jsx
```
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/render-values" className="hover:underline">RenderValues</Link>
    </nav>
  );
}

export default Navbar;
```

## 5. Create Pages
📁 Create a folder named pages/ and add the following:

pages/RenderValues.jsx
```
import React from 'react';

function RenderValues() {
  const title = "I love Sofi";
  const likes = 50;
  const person = { name: "Yoshi", age: 30 };
  const isOnline = true;
  const num1 = 10;
  const num2 = 5;
  const sum = num1 + num2;

  const people = [
    { name: "Alice Johnson", age: 28 },
    { name: "Marcus Lee", age: 35 },
    { name: "Sophia Rivera", age: 22 },
    { name: "Daniel Kim", age: 41 },
    { name: "Emma Brooks", age: 30 }
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Hello, {title}</h2>
      <p>Likes: {likes}</p>
      <p>Name: {person.name}</p>

      <p>Status: {isOnline ? "Online 🟢" : "Offline 🔴"}</p>
      <p>Sum of {num1} + {num2} = {sum}</p>

      <h3 className="mt-4 font-semibold">People List:</h3>
      <ul className="list-disc ml-6">
        {people.map((p, index) => (
          <li key={index}>{p.name} - {p.age} years old</li>
        ))}
      </ul>
    </div>
  );
}

export default RenderValues;
```

pages/Home.jsx
```
import React from 'react';

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home</h1>
    </div>
  );
}

export default Home;
```

## 6. Set up Routing
src/App.jsx
```
import { BrowserRouter, Routes, Route } from 'react-router'

import Navbar from './components/Navbar';
import Home from "./pages/Home";
import RenderValues from './pages/RenderValues';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/render-values" element={<RenderValues />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

## 6. Events
An event is something the user does (like click, type, hover), and we can respond with a function (called a handler).

pages/Events.jsx
```
function Events() {
    const handleClick = () => {
        console.log("You clicked the main button!");
    };

    const handleHover = () => {
        console.log("You hovered over me!");
    };

    const handleInputChange = (e) => {
        console.log("You typed:", e.target.value);
    };

    return (
        <div className="p-4 space-y-4">
            <button
                onClick={handleClick}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Click Me
            </button>

            <div
                onMouseOver={handleHover}
                className="p-4 bg-gray-200 rounded cursor-pointer"
            >
                Hover over this box
            </div>

            <input
                type="text"
                onChange={handleInputChange}
                placeholder="Type something..."
                className="border p-2 rounded"
            />
        </div>
    );
}

export default Events
```

## 6. useState

```
```

