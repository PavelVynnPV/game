import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { ukraine, english, poland } from "../HeaderSection/HeaderLanguageComp";

import {
  rules_ukraine,
  ua_main_rules_list,
  ua_building_rules_list,
  en_building_rules_list,
  en_main_rules_list,
  rules_english,
  rules_poland,
  pl_building_rules_list,
  pl_main_rules_list,
} from "../Rules/RulesLangComp";

import "../HeaderSection/Header.css";
import "./Navbar.css";

import { Rules } from "../Rules";

const Navbar = ({
  web_lng,
  handleClickChangeLanguage,
  setOpenModalRules,
  lang_text,
  mainRules,
  buildRules,
  openModalRules,
}) => {
  let lng = web_lng;

 
  useEffect(() => {
    const togleBodyFixed = () => {
      let body = document.querySelector('body');
      if(!openModalRules) {
        body.style.overflow = "inherit"
      }else {
        body.style.overflow = "hidden"
      }
    }
    togleBodyFixed()
  },[openModalRules])

  return (
    <>
      <div
        className={!openModalRules ? "unActive" : "dark_modal_bg"}
        onClick={() => setOpenModalRules(false)}
      ></div>
      <div className={!openModalRules ? "unActive" : "modal_rules"}>
        <Rules
          rules_lng={lang_text}
          mainRules={mainRules}
          buildRules={buildRules}
          setOpenModalRules={setOpenModalRules}
        />
      </div>
      <div className="header__nav_language">
        <span
          className="lang_btn ua"
          onClick={() => {
            handleClickChangeLanguage(
              ukraine,
              rules_ukraine,
              ua_main_rules_list,
              ua_building_rules_list
            );
          }}
        >
          UA
        </span>
        <span
          className="lang_btn en"
          onClick={() => {
            handleClickChangeLanguage(
              english,
              rules_english,
              en_main_rules_list,
              en_building_rules_list
            );
          }}
        >
          EN
        </span>
        <span
          className="lang_btn pl"
          onClick={() =>
            handleClickChangeLanguage(
              poland,
              rules_poland,
              pl_main_rules_list,
              pl_building_rules_list
            )
          }
        >
          PL
        </span>
      </div>
      <div className="header__nav">
        <div className="header__nav_logo_links__container">
          <div className="header__nav_logo_links">
            <Link to="/" className="header__nav_logo">
              <img src={logo} alt="" />
            </Link>
            <div className="header__nav_links">
              <Link
                to="https://discord.gg/nightmaregames"
                className="link_btn disc"
              >
                {lng.disc_btn}
              </Link>
              <Link
                to="https://www.tiktok.com/@nightmaregamess"
                className="link_btn tiktok"
              >
                {lng.ttok_btn}
              </Link>
              <Link
                to="https://www.youtube.com/@egororlean"
                className="link_btn youtube"
              >
                {lng.yube_btn}
              </Link>
              <Link
                to="/rules"
                className="link_btn youtube"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenModalRules(true);
                }}
              >
                {lng.rules_btn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
