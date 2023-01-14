import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../app/store";

import style from "../../style/Header.module.css";
import img from "../../images/logo.svg";

function Header() {
  const dispatch = useDispatch();

  const menuHandler = () => {
    dispatch(actions.showMenu());
  };

  const calcPostion = function (initialPosition) {
    return initialPosition - modelsRef.current.getBoundingClientRect().left;
  };

  const mouseEnterHandle = (event) => {
    if (!event.target.classList.contains("links")) return;

    const position = calcPostion(event.target.getBoundingClientRect().x);
    dispatch(actions.mouseOn({ isMouseOn: true, position }));
  };
  const mouseOuteHandler = () => {
    dispatch(actions.mouseOn(false));
  };

  const modelsRef = useRef();

  const isLinkHovered = useSelector((state) => state.isMouseOn);
  const position = useSelector((state) => state.positionMouse);

  const backgroundStyle = isLinkHovered
    ? `${style.linkBackground} ${style.active}`
    : style.linkBackground;

  return (
    <header
      className={style.header}
      onMouseOut={mouseOuteHandler}
      onMouseMove={mouseEnterHandle}
    >
      <div className={style.navLogo}>
        <Link to="/home">
          <img src={img} alt="" />
        </Link>
      </div>
      <div className={style.models} ref={modelsRef}>
        {<div style={{ left: `${position}px` }} className={backgroundStyle} />}
        <Link className={`links ${style.links}`} to="/model/model-s">
          Model S
        </Link>
        <Link className={`links ${style.links}`} to="/model/model-y">
          Model Y
        </Link>
        <Link className={`links ${style.links}`} to="/model/model-x">
          Model X
        </Link>
        <Link className={`links ${style.links}`} to="/model/model-3">
          Model 3
        </Link>
        <Link className={`links ${style.links}`} to="/solar-roof">
          Solar Roof
        </Link>
      </div>
      <div className={style.menu}>
        <a href="./shop">shop</a>
        <a href="./acount">Account</a>
        <button onClick={menuHandler}>Menu</button>
      </div>
    </header>
  );
}

export default Header;
