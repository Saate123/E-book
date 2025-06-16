/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Articles from "./pages/Articles";
import NewsEvents from "./pages/NewsEvents";
import Book from "./pages/Books";
import StoryPopup from "./pages/Story";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import AllStories from "./pages/AllStories";
import FullArticle from "./pages/FullArticle";
import ArticlesUpload from "./pages/ArticlesUpload";
import AllArticles from "./pages/AllArticles";


function App() {
  // Scroll to top on route change

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:id" element={<StoryPopup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/events" element={<NewsEvents />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<FullArticle />} />
        <Route path="/book/:bookId" element={<Book />} />
        <Route path="/login" element={<Login />} />
        <Route path="/uploads" element={<Upload />} />
        <Route path="/all-stories" element={<AllStories />} />
        <Route path="/all-articles" element={<AllArticles />} />
        <Route path="/articles-upload" element={<ArticlesUpload />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
