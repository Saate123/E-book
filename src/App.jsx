/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Articles from "./pages/Articles";
import NewsEvents from "./pages/NewsEvents";
import Book from "./pages/Books";


function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/events" element={<NewsEvents />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/book/:bookId" element={<Book />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
