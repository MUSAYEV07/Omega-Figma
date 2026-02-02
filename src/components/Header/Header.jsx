import React, { useState, useEffect, useRef } from "react";
import phone from "./phone.png";
import git from "./git.png";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("uz");
  const navRef = useRef(null);

  // Tashqarisini bosganda menu yopiladi
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Dark mode body ga qo‘shiladi
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Matnlar (oddiy til o‘zgartirish)
  const texts = {
    uz: { demos: "Demos", pages: "Sahifalar", support: "Yordam" },
    en: { demos: "Demos", pages: "Pages", support: "Support" },
    ru: { demos: "Демо", pages: "Страницы", support: "Поддержка" },
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">

          <h1 className="header-title">Omega</h1>

          <nav ref={navRef} className={`nav ${menuOpen ? "open" : ""}`}>
            <ul className="header-menu">
              <li><a href="#">{texts[lang].demos}</a></li>
              <li><a href="#">{texts[lang].pages}</a></li>
              <li><a href="#">{texts[lang].support}</a></li>
            </ul>
          </nav>

          <div className="header-btns">
            {/* Language */}
            <select
              className="lang-select"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="uz">UZ</option>
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>

            {/* Dark mode */}
            <button
              className="theme-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Burger */}
            <button
              className={`burger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <a href="tel:+998771325807">
              <img src={phone} alt="Phone" />
            </a>

            <a
              href="https://github.com/MUSAYEV07"
              target="_blank"
              rel="noreferrer"
            >
              <img src={git} alt="GitHub" />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
