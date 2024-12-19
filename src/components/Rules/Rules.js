import React from "react";

import "./Rules.css";

const Rules = ({rules_lng, mainRules, buildRules, setOpenModalRules}) => {
  const rulTitle = rules_lng;
  return (
    <div className="rules">
      <span className="close_btn" onClick={() => setOpenModalRules(false)}>x</span>
      <div className="rules__container">
        <div className="main_rules">
          <h1 key={rulTitle.main_rules} className="main_rules__title">
            {rulTitle.main_rules}
          </h1>
          <ol className="main_rules__list">
            {mainRules?.map((rule_list_item) => (
              <li className="rule_list_item">{rule_list_item}</li>
            ))}
          </ol>
        </div>
        <div className="building_rules">
          <h1 key={rulTitle.building_rules} className="building_rules__title">
            {rulTitle.building_rules}
          </h1>
          <p>{rulTitle.fence}</p>
          <ol className="build_rules__list">
            {buildRules?.map((rule_list_item, index) => (
              <div className="rule_list_block">
                {" "}
                <li
                  key={index}
                  className="rule_list_item building_rules_item"
                  dangerouslySetInnerHTML={{ __html: rule_list_item }}
                />
                <a
                  className="reg_link"
                  href="https://discord.com/channels/867729535658885140/1293563457895006208"
                >
                  Registration
                </a>
                <a
                  className="reg_link"
                  href="https://discord.com/channels/867729535658885140/1287749434817380362"
                >
                  Tickets
                </a>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Rules;
