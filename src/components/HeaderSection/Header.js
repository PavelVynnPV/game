import React, { useState } from "react";
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
      console.log("Page URL copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }

  const ipCopiedCheck = (ip) => {
    setIp(ip);
    setTimeout(() => setIp(false), 3000);
  };
  const portCopiedCheck = (port) => {
    setPort(port);
    setTimeout(() => setPort(false), 3000);
  };

  let web_lng = lang_text.lang_text;

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__main">
          <div className="header__main_container">
            <div className="header__main_title_box">
              <h1 className="header__main_title">
                {web_lng.title} <span id="dayz_word">DayZ</span>
              </h1>
              <h1 className="header__main_title">{web_lng.title2}</h1>
              <div className="servers_container">
                <div className="first_serv">
                  <a
                    href="https://gamemonitoring.net/dayz/servers/6984486/connect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="connect_btn"
                  >
                    Connect
                  </a>
                  <a
                    href="https://gamemonitoring.net/servers/6984486"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://widgets.gamemonitoring.net/servers/6984486/560x95.png"
                      alt="[UA/EU] NM PvE | BETA TEST | discord.gg/nightmaregame"
                      title="[UA/EU] NM PvE | BETA TEST | discord.gg/nightmaregame"
                      className="serv_img"
                    />
                  </a>
                </div>
                <div className="second_serv">
                  <a
                    href="https://gamemonitoring.net/dayz/servers/7042350/connect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="connect_btn"
                  >
                    Connect
                  </a>
                  <a
                    href="https://gamemonitoring.net/servers/7042350"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://widgets.gamemonitoring.net/servers/7042350/560x95.png"
                      alt="gm.link/u96841 [UA/EU] NM LIVONIA RP | BETA TEST | discord.gg/n"
                      title="gm.link/u96841 [UA/EU] NM LIV  ONIA RP | BETA TEST | discord.gg/n"
                      className="serv_img"
                    />
                  </a>
                </div>
              </div>
            </div>
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
                  <span className={!ip ? "disabled" : "copied_text"}>
                    copied✓
                  </span>
                </span>
                <span className="port">
                  Port:{" "}
                  <span
                    onClick={(e) => {
                      copyPageUrl(e.target.innerText);
                      portCopiedCheck(true);
                    }}
                  >
                    2302
                  </span>
                  <span className={!port ? "disabled" : "copied_text_port"}>
                    copied✓
                  </span>
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
