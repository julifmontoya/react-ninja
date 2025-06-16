import { BrowserRouter, Routes, Route } from 'react-router'

import Navbar from './components/Navbar';
import Home from "./pages/Home";
import RenderValues from './pages/RenderValues';
import Events from './pages/Events';
import UseState from './pages/UseStateForm';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/render-values" element={<RenderValues />} />
        <Route path="/events" element={<Events />} />
        <Route path="/use-state" element={<UseState />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App