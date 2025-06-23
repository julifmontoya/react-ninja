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
npm install
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

## 7. Events
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

Hook it into your app
In App.jsx:
```
import Events from './pages/Events';
<Route path="/events" element={<Events />} />
```

## 8. useState
useState lets your component remember things (like a counter, a name, or a toggle). It reacts to changes, so your UI updates automatically when the value changes.

🔍 const [count, setCount] = useState(0)
- count → the current value (starts at 0)
- setCount → the function to change the value
- When setCount is called, the UI automatically updates

🧠 You can use useState for any value:
- const [name, setName] = useState("Julian");
- const [isOnline, setIsOnline] = useState(true);
- const [items, setItems] = useState([]);

pages/useState.jsx
```
import React, { useState } from 'react';

function UserForm() {
  // [value, function to update it]
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log("User Info:", { name, age });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md">
      <div>
        <label className="block mb-1 font-medium">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
          className="border p-2 rounded w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default UserForm;
```

Hook it into your app
In App.jsx:
```
import UseState from './pages/UseStateForm';
<Route path="/use-state" element={<UseState />} />
```

## 9. Props – Passing Data to Components
Props (short for properties) are a way to pass data from a parent component to a child component in React. It’s like giving your component some tools or info to do its job. Props are read-only — the child can use them but not change them.

Create a component called UserCard.jsx (in components)
```
import React from 'react';

function UserCard({ name, age, isOnline }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h3 className="text-lg font-semibold">
        👤 {name} {isOnline ? <span className="text-green-500">🟢</span> : <span className="text-red-500">🔴</span>}
      </h3>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserCard;
```

Use that component in a page like UserList.jsx (in pages)
```
import React from 'react';
import UserCard from '../components/UserCard';

function UserList() {
  const users = [
    { name: 'Alice', age: 25, isOnline: true },
    { name: 'Bob', age: 32, isOnline: false },
    { name: 'Charlie', age: 29, isOnline: true }
  ];

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">User List</h2>

      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          age={user.age}
          isOnline={user.isOnline}
        />
      ))}
    </div>
  );
}

export default UserList;
```

Hook it into your app
```
import UserList from './pages/UserList';
<Route path="/props" element={<UserList />} />
```

## 10. Function as a Prop: Emitting Info from Child to Parent in React
- The parent component creates a function
- That function is passed down to the child as a prop
- The child calls that function, optionally sending some data
- The parent receives that info, and reacts (like updating state)

Create a component called UserCardDelete.jsx (in components)
```
import React from 'react';

function UserCard({ user, onDelete }) {
  return (
    <div className="border p-4 rounded shadow bg-white flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">👤 {user.name}</h3>
        <p>Age: {user.age}</p>
      </div>

      <button
        onClick={() => onDelete(user.id)}
        className="text-red-500 hover:text-red-700 text-xl"
        title="Delete user"
      >
        🗑️
      </button>
    </div>
  );
}

export default UserCard;
```

UserList.jsx – Manage state and pass handleDelete
```
import React, { useState } from 'react';
import UserCard from '../components/UserCardDelete';

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 32 },
    { id: 3, name: 'Charlie', age: 29 }
  ]);

  const handleDelete = (idToDelete) => {
    setUsers((prevUsers) => prevUsers.filter(user => user.id !== idToDelete));
    console.log(`User with ID ${idToDelete} has been deleted`);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">User List</h2>

      {users.map((user) => (
        <UserCard key={user.id} user={user} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default UserList;
```

Hook it into your app
```
import UserListDelete from './pages/UserListDelete';
<Route path="/emits" element={<UserListDelete />} />
```

## 11. Fetch users with async/await

pages/FetchUsers.jsx
```
import React, { useEffect, useState } from 'react';

function FetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Async function to fetch users
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  // Call the function once when component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <p className="p-4">Loading users...</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Fetched Users</h2>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="p-2 border rounded">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm">{user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchUsers;
```

Hook it into your app
```
import FetchUsers from './pages/FetchUsers';
<Route path="/fetch-users" element={<FetchUsers />} />
```

## 12. useMemo — Memoize Expensive Calculations
useMemo is a React Hook that caches a computed value so it only recalculates when dependencies change.
It’s used for performance optimization when recalculating is expensive or causes unnecessary re-renders.

```
import React, { useMemo, useState } from 'react';

function Memo() {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    { id: 1, name: 'Alice Johnson', age: 28 },
    { id: 2, name: 'Marcus Lee', age: 35 },
    { id: 3, name: 'Sophia Rivera', age: 22 },
    { id: 4, name: 'Daniel Kim', age: 41 },
    { id: 5, name: 'Emma Brooks', age: 30 }
  ];

  // 🧠 Only re-filters if searchTerm or users changes
  const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, users]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">🔍 Filter Users</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded mb-4"
      />

      <ul className="list-disc ml-6 space-y-1">
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} – {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Memo;
```

Hook it into your app
```
import FetchUsers from './pages/Memo';
<Route path="/use-memo" element={<Memo />} />
```

## 13. Context
context/ThemeContext.jsx
```
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

App.jsx
```
import { BrowserRouter, Routes, Route } from 'react-router'

import Navbar from './components/Navbar';
import Home from "./pages/Home";
import RenderValues from './pages/RenderValues';
import Events from './pages/Events';
import UseState from './pages/UseStateForm';
import UserList from './pages/UserList';
import UserListDelete from './pages/UserListDelete';
import FetchUsers from './pages/FetchUsers';
import Memo from './pages/Memo';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/render-values" element={<RenderValues />} />
          <Route path="/events" element={<Events />} />
          <Route path="/use-state" element={<UseState />} />
          <Route path="/props" element={<UserList />} />
          <Route path="/emit" element={<UserListDelete />} />
          <Route path="/fetch-users" element={<FetchUsers />} />
          <Route path="/use-memo" element={<Memo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
```

ThemeToggler.jsx component 
```
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`p-4 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <p>Current theme: {theme}</p>
      <button
        onClick={toggleTheme}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggler;
```

Home
```
import React from 'react';
import ThemeToggler from '../components/ThemeToggler';

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🏡 Home</h1>
      <ThemeToggler />
    </div>
  );
}

export default Home;
```