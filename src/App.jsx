import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import About from "./About.jsx";
import Navbar from "./Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
