import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/HeaderSection";

import {
  rules_ukraine,
  ua_main_rules_list,
  ua_building_rules_list,
} from "./components/Rules/RulesLangComp";
import { ukraine } from "./components/HeaderSection/HeaderLanguageComp";

import "./components/HeaderSection/Header.css";
import "./App.css";
import { Navbar } from "./components/Navbar";

const AppRoutes = () => {
  const [lng, setLng] = useState(ukraine);
  const [rulesLng, setRulesLng] = useState(rules_ukraine);
  const [mainRules, setMainRules] = useState(ua_main_rules_list);
  const [buildRules, setBuildRules] = useState(ua_building_rules_list);

  const [openModalRules, setOpenModalRules] = useState(false);

  const handleClickChangeLanguage = (
    language,
    rules_ukraine,
    main_rules_list,
    building_rules_list
  ) => {
    let lng = language;
    let lngRules = rules_ukraine;
    setLng(lng);
    setRulesLng(lngRules);
    setMainRules(main_rules_list);
    setBuildRules(building_rules_list);
  };

  return (
    <>
      <Router>
        <span className="background_img"></span>
        <Navbar
          handleClickChangeLanguage={handleClickChangeLanguage}
          web_lng={lng}
          setOpenModalRules={setOpenModalRules}
          lang_text={rulesLng}
          mainRules={mainRules}
          buildRules={buildRules}
          openModalRules={openModalRules}
        />
        <Routes>
          <>
            <Route
              exact
              path="/"
              element={
                <header>
                  <Header lang_text={lng} />
                </header>
              }
            />
          </>
        </Routes>
      </Router>
      <footer className="copyright">© 2024 NM DayZ.</footer>
    </>
  );
};

export default AppRoutes;
