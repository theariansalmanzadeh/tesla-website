import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { actions } from "../../app/store";
import { sectionDetails } from "../../features/sectionDetails";
import useSection from "../../Hooks/use-section";

import style from "../../style/models.module.css";
import CarStrucure from "./CarStrucure";

import LandingDetails from "./LandingDetails";
import ModelGlossary from "./ModelGlossary";

const classSection = function (model) {
  return `${style["model-landingPage"]} ${style[model.imgSource]}`;
};

function Model() {
  const { ModelSection, interiorTitle, diverCallBack, param, observerOption } =
    useSection();

  const dividerRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    const dividerObserver = new IntersectionObserver(
      diverCallBack,
      observerOption
    );
    dividerObserver.observe(dividerRef.current);
  }, [observerOption, diverCallBack]);

  useEffect(() => {
    let name = [param.modelId.slice(0, 5), param.modelId.slice(6)];
    name = name
      .map((item) => item[0].toUpperCase().concat(item.slice(1)))
      .join(" ");

    dispatch(actions.findSection(name));
  }, [param, dispatch]);
  console.log(sectionDetails[0]?.carStructure);

  return (
    <div>
      <div
        className={classSection(sectionDetails[ModelSection])}
        ref={dividerRef}
      >
        <h2>{sectionDetails[ModelSection].title}</h2>
        <LandingDetails Model={sectionDetails[ModelSection]} />
      </div>
      <div className={style.divider}>
        <p className={interiorTitle}>Interior Design</p>
      </div>
      <div className={style.interior}></div>
      <ModelGlossary />
      {sectionDetails[ModelSection]?.carStructure && (
        <CarStrucure infos={sectionDetails} />
      )}
    </div>
  );
}

export default Model;
