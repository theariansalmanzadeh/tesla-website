import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Modal from "../../UI/Modal";
import { actions } from "../../../app/store";

import styles from "../../../style/menu.module.css";

function Menu(props) {
  const dispatch = useDispatch();

  const closeMenuHanlder = () => {
    dispatch(actions.hideMenu());
  };

  return (
    <Modal closeModal={props.closeModal}>
      <div className={styles.menu}>
        <button className={styles["close-menu"]} onClick={closeMenuHanlder}>
          &times;
        </button>
        <ul>
          {/* <div className={styles.active}> */}
          <Link className={styles.active} to="/model/model-s">
            Model S
          </Link>
          <Link className={styles.active} to="/model/model-y">
            Model Y
          </Link>
          <Link className={styles.active} to="/model/model-x">
            Model X
          </Link>
          <Link className={styles.active} to="/model/model-3">
            Model 3
          </Link>
          <Link className={styles.active} to="/solar-roof">
            Solar Roof
          </Link>
          {/* </div> */}
          <li key={1}>
            <a href="index.html">Existing Inventory </a>
          </li>
          <li key={2}>
            <a href="index.html">Used Inventory </a>
          </li>
          <li key={3}>
            <a href="index.html">Trade-in</a>
          </li>
          <li key={4}>
            <a href="index.html">Find Us </a>
          </li>
          <li>
            <a href="index.html">Support</a>
          </li>
        </ul>
      </div>
    </Modal>
  );
}

export default Menu;
