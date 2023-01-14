import React, { useRef, useState, useEffect } from "react";

import Section from "../components/layout/Section";
const HomePage = () => {
  const sectionInfos = [
    {
      title: "Model S",
      imgSource: "model-s",
      id: 1,
      btn1: "Custom order",
      btn2: "Exiting Inventory",
    },
    {
      title: "Model Y",
      imgSource: "model-y",
      id: 2,
      btn1: "Custom order",
      btn2: "Exiting Inventory",
    },
    {
      title: "Model X",
      imgSource: "model-x",
      id: 3,
      btn1: "Custom order",
      btn2: "Exiting Inventory",
    },
    {
      title: "Model 3",
      imgSource: "model-3",
      id: 4,
      btn1: "Custom order",
      btn2: "Exiting Inventory",
    },
    {
      title: "Solar panel",
      imgSource: "solar-panel",
      id: 5,
      btn1: "Order now",
      btn2: "Learn more",
    },
    {
      title: "Accessories",
      imgSource: "accessories",
      id: 6,
      btn1: "Order now",
      btn2: "",
    },
  ];

  const sectionsRef = useRef();

  return (
    <div id="sectionWrapper" ref={sectionsRef}>
      {sectionInfos.map((infos, index) => (
        <Section
          id="section"
          key={infos.id}
          title={infos.title}
          section={infos.imgSource}
          btn1={infos.btn1}
          btn2={infos.btn2}
          // pageScrollHandler={pageScrollHandler}
        />
      ))}
    </div>
  );
};

export default HomePage;
