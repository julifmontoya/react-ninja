import { BrowserRouter, Routes, Route } from 'react-router'

import Navbar from './components/Navbar';
import Home from "./pages/Home";
import RenderValues from './pages/RenderValues';
import Events from './pages/Events';
import UseState from './pages/UseStateForm';
import UserList from './pages/UserList';
import UserListDelete from './pages/UserListDelete';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/render-values" element={<RenderValues />} />
        <Route path="/events" element={<Events />} />
        <Route path="/use-state" element={<UseState />} />
        <Route path="/props" element={<UserList />} />
        <Route path="/emit" element={<UserListDelete />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App