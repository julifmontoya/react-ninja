import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/render-values" className="hover:underline">RenderValues</Link>
      <Link to="/events" className="hover:underline">Events</Link>
      <Link to="/use-state" className="hover:underline">UseState</Link>
      <Link to="/props" className="hover:underline">Props</Link>
      <Link to="/emit" className="hover:underline">Emit</Link>
      <Link to="/fetch-users" className="hover:underline">Fetch API</Link>
      <Link to="/use-memo" className="hover:underline">Use Memo</Link>
    </nav>
  );
}

export default Navbar;

/* 
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "underline font-semibold" : "hover:underline"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/render-values"
        className={({ isActive }) =>
          isActive ? "underline font-semibold" : "hover:underline"
        }
      >
        RenderValues
      </NavLink>

      <NavLink
        to="/events"
        className={({ isActive }) =>
          isActive ? "underline font-semibold" : "hover:underline"
        }
      >
        Events
      </NavLink>
    </nav>
  );
}

export default Navbar; */
