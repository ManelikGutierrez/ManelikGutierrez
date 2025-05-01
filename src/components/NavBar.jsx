import { useState, useEffect } from "react";

import { navLinks } from "../constants";
//import { useState } from "react";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [animatedText, setAnimatedText] = useState("M___l__ G__t__r__z");
  const finalText = "Manelik Gutierrez";

  useEffect(() => {
    let currentText = animatedText.split("");
    const interval = setInterval(() => {
      currentText = currentText.map((char, index) => {
        if (char === finalText[index]) return char;
        return Math.random() > 0.5 ? finalText[index] : String.fromCharCode(33 + Math.random() * 94);
      });
      setAnimatedText(currentText.join(""));
      if (currentText.join("") === finalText) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          {animatedText}
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;