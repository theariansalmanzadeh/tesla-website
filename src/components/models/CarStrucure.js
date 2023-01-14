import React, { useEffect, useMemo, useState, useRef } from "react";
import carImg from "../../images/car-structure.jfif";
import styles from "../../style/structure.module.css";

function CarStrucure({ infos }) {
  const imgRef = useRef();
  const [intersecting, setIntersecting] = useState(false);

  const observerOptions = useMemo(() => {
    return { root: null, rootMargin: "0px", threshold: 0.8 };
  }, []);

  const intersectCallback = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    const dataLines = document.querySelectorAll("#dataLines");
    dataLines.forEach((elem) => {
      console.log(elem.classList);
      setIntersecting(true);
    });
  };

  const LinesClass = intersecting
    ? `${styles.lines} ${styles.linesActive}`
    : `${styles.lines}`;
  const LineReverseClass = intersecting
    ? `${styles.linesReversed} ${styles.linesActive}`
    : `${styles.linesReversed}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      intersectCallback,
      observerOptions
    );
    observer.observe(imgRef.current);
  }, [observerOptions]);

  return (
    <div className={styles.sturcture}>
      <div className={styles.writings}>
        <div>
          <p>safty</p>
          <h4>High Impact Protection</h4>
          <p>
            Model S is built from the ground up as an electric vehicle, with a
            high-strength architecture and floor-mounted battery pack for
            incredible occupant protection and low rollover risk. Every new
            Model S includes Tesla’s latest active safety features, such as
            Automatic Emergency Braking, at no extra cost.
          </p>
        </div>
        <div>
          <button className={styles.btn}>Order now</button>
        </div>
      </div>
      <div className={styles.carImg} ref={imgRef}>
        <img src={carImg} alt="car structure" />
        <div className={styles.pointers}>
          <div id="dataLines" className={LinesClass}></div>
        </div>
        <div className={styles.pointers}>
          <div id="dataLines" className={LinesClass}></div>
        </div>
        <div className={styles.pointers}>
          <div id="dataLines" className={LineReverseClass}></div>
        </div>
        <div className={styles.details}>
          <p>Front-Impact Protection</p>
          <p>Side-Impact Protection</p>
          <p>Very Low Rollover Risk</p>
        </div>
      </div>
    </div>
  );
}

export default CarStrucure;
