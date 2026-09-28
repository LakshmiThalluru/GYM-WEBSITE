import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Hero } from "./Hero";
import Contact from "./Contact";
import { Footer } from "./Footer";
import { Programs } from "./Programs";
import Trainers from "./Trainers";

export const App = () => {
  useEffect(() => {
    const revelElements = document.querySelectorAll(".reveal");
    const handleScroll = () => {
      revelElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) el.classList.add("active");
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Programs />
      <Trainers />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
