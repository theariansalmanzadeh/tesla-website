import React, { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import style from "../style/models.module.css";

import { actions } from "../app/store";

function useSection() {
  const ModelSection = useSelector((state) => state.sectionModel);
  const showTitle = useSelector((state) => state.showTitle);

  const dispatch = useDispatch();

  const param = useParams();

  const diverCallBack = useCallback(
    function (entries) {
      const [entry] = entries;
      if (entry.isIntersecting) {
        dispatch(actions.interiorTitleState(false));
        return;
      }
      dispatch(actions.interiorTitleState(true));
    },
    [dispatch]
  );

  const interiorTitle = showTitle ? style["interior-Title-active"] : "";

  const observerOption = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };
  }, []);

  return {
    ModelSection,
    showTitle,
    diverCallBack,
    param,
    observerOption,
    interiorTitle,
  };
}

export default useSection;
