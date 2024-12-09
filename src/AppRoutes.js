import React, {useState} from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Header } from "./components/HeaderSection";

import { ukraine, english, poland } from "./components/HeaderSection/HeaderLanguageComp";

import "./components/HeaderSection/Header.css";
import "./App.css";


const AppRoutes = () => {

    const [lng, setLng] = useState(ukraine)

    const handleClickChangeLanguage = (language) => {
        let lng = language
        setLng(lng)
    }

  return (
    <Router>
      <header>
        <div className="header__nav_language">
          <span className="lang_btn ua" onClick={() => handleClickChangeLanguage(ukraine)}>UA</span>
          <span className="lang_btn en" onClick={() => handleClickChangeLanguage(english)}>EN</span>
          <span className="lang_btn pl" onClick={() => handleClickChangeLanguage(poland)}>PL</span>
        </div>
        <Header lang_text={lng}/>
      </header>

      <footer className="copyright">© 2024 NM DayZ.</footer>
    </Router>
  );
  
};

export default AppRoutes;
