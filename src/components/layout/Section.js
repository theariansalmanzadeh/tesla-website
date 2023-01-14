import React, { useEffect, useRef, useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";

import styles from "../../style/section.module.css";

function Section(props) {
  const sectionRef = useRef();

  const pageScrollHandler = (e) => {
    sectionRef.current.nextElementSibling.scrollIntoView();
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${styles[`${props.section}`]}`}
    >
      <h2>{props.title}</h2>
      <div className={styles.btns}>
        <div className={styles["main-btns"]}>
          <button className={styles.btn1}>{props.btn1}</button>
          {props.btn2.length > 0 && (
            <button className={styles.btn2}>{props.btn2}</button>
          )}
        </div>
        {props.btn2 !== "" ? (
          <button className={styles.arrow}>
            <BsChevronCompactDown
              className={styles.icon}
              onClick={pageScrollHandler}
            />
          </button>
        ) : null}
      </div>
    </section>
  );
}

export default Section;
