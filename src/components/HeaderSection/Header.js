import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"
import "./Header.css";

const Header = (lang_text, handleClickChangeLanguage) => {

  let web_lng = lang_text.lang_text;

  console.log(handleClickChangeLanguage)
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__nav">
          <div className="header__nav_logo_links__container">
            <div className="header__nav_logo_links">
              <Link to="/" className="header__nav_logo">
              <img src={logo} alt="" />
              </Link>
              <div className="header__nav_links">
                <Link className="link_btn disc">{web_lng.disc_btn}</Link>
                <Link className="link_btn youtube">{web_lng.yube_btn}</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="header__main">
          <div className="header__main_container">
            <h1 className="header__main_title">{web_lng.title} <span id="dayz_word">DayZ</span></h1>
            <h1 className="header__main_title">{web_lng.title2}</h1>
            <p className="header__main_underTitle_text">{web_lng.underTitle}</p>
            <p className="header__main_underTitle_text underTitle_second">{web_lng.aboveIpText}</p>
            <div className="header__main_ip_port">
              <span className="ip">Ip: 144.76.103.125</span>
              <span className="port">Port: 2302</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
