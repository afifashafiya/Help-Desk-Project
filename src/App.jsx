import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "../src/assets/pages/Home";
import ReactVersion from "../src/assets/pages/ReactVersion";
import Tickets from "../src/assets/pages/Tickets";
import About from "../src/assets/pages/About";
import CVersion from "../src/assets/pages/Cversion";
function App() {
  const [tickets, setTickets] = useState([]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/c-version"
          element={<CVersion tickets={tickets} setTickets={setTickets} />}/>
        <Route path="/react-version" element={<ReactVersion tickets={tickets}setTickets={setTickets}/>} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );}
export default App;
