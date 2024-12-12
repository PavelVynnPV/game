import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "./Header.css";

const Header = (lang_text, handleClickChangeLanguage) => {
  const [ip, setIp] = useState(false);
  const [port, setPort] = useState(false);

  // const handleCopyText = (text) => {
  //   navigator.clipboard.writeText(text);
  // };  

  async function copyPageUrl(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Page URL copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  const ipCopiedCheck = (ip) => {
    setIp(ip)
    setTimeout(() => setIp(false), 3000)
  }
  const portCopiedCheck = (port) => {
    setPort(port)
    setTimeout(() => setPort(false), 3000)
  }

  let web_lng = lang_text.lang_text;

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
                <Link to="https://discord.gg/nightmaregames" className="link_btn disc">{web_lng.disc_btn}</Link>
                <Link to="https://www.youtube.com/@egororlean" className="link_btn youtube">{web_lng.yube_btn}</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="header__main">
          <div className="header__main_container">
            <div className="header__main_title_box">
              <h1 className="header__main_title">
                {web_lng.title} <span id="dayz_word">DayZ</span>
              </h1>
              <h1 className="header__main_title">{web_lng.title2}</h1>
              {/* <p className="header__main_underTitle_text">{web_lng.underTitle}</p> */}
            </div>{" "}
            <div className="header__main_footer_text">
              <p className="header__main_underTitle_text underTitle_second">
                {web_lng.aboveIpText}
              </p>
              <div className="header__main_ip_port">
                <span className="ip">
                  Ip:{" "}
                  <span
                    onClick={(e) => {
                      copyPageUrl(e.target.innerText);
                      ipCopiedCheck(true);
                    }}
                  >
                    95.217.33.171
                  </span>
                  <span className={!ip ? "disabled" : "copied_text"}>copied✓</span>
                </span>
                <span className="port">
                  Port:{" "}
                  <span
                    onClick={(e) => {
                      copyPageUrl(e.target.innerText);
                      portCopiedCheck(true)
                    }}
                  >
                    2302
                  </span>
                  <span className={!port ? "disabled" : "copied_text_port"}>copied✓</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
