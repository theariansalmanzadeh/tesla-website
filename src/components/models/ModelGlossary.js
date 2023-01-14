import React, { useEffect, useMemo, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector, useDispatch } from "react-redux";
import loading from "../../images/loading.png";
import img1 from "../../images/connected.jpg";
import img2 from "../../images/audio.jpg";
import img3 from "../../images/game.jpg";

import { actions } from "../../app/store";

import style from "../../style/models.module.css";

const imgLoader = <div className={style.imgLoading}>loading</div>;

function ModelGlossary() {
  const diverCallBack = function (entries) {
    const [entry] = entries;
    const allDetailSections = Array.from(entry.target.parentElement.children);

    if (
      entry.isIntersecting &&
      entry.intersectionRatio < 0.2 &&
      entry.intersectionRect.top > 0
    ) {
      const indx = allDetailSections.findIndex(
        (section) => section === entry.target
      );

      dispatch(actions.sectionsDisplay({ indx, showState: false }));
    } else if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
      const indx = allDetailSections.findIndex(
        (section) => section === entry.target
      );

      dispatch(actions.sectionsDisplay({ indx, showState: true }));
    }
  };

  const observerOption = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px 0px 100px 0px",
      threshold: [0.5, 0],
    };
  }, []);

  const glossarySection1Ref = useRef();
  const glossarySection2Ref = useRef();
  const glossarySection3Ref = useRef();

  const dispatch = useDispatch();

  const sectionDisplay = useSelector((state) => state.sectionsDisplay);

  useEffect(() => {
    const dividerObserver = new IntersectionObserver(
      diverCallBack,
      observerOption
    );
    console.log("33");

    dividerObserver.observe(glossarySection1Ref.current);
    dividerObserver.observe(glossarySection2Ref.current);
    dividerObserver.observe(glossarySection3Ref.current);
  }, [observerOption]);

  const glossarySection1 = sectionDisplay[0]
    ? `${style.glossSection} ${style.active}`
    : `${style.glossSection}`;
  const glossarySection2 = sectionDisplay[1]
    ? `${style.glossSection} ${style.active}`
    : `${style.glossSection}`;
  const glossarySection3 = sectionDisplay[2]
    ? `${style.glossSection} ${style.active}`
    : `${style.glossSection}`;

  return (
    <section className={style.ModelGlossary}>
      <div className={glossarySection1} ref={glossarySection1Ref}>
        <div className={style.glossaryImg}>
          <LazyLoadImage
            effect="blur"
            PlaceholderSrc={loading}
            src={img1}
            alt=""
          />
        </div>
        <div className={style.glossaryText}>
          <h5>Stay Connected</h5>
          <p>
            Instantly connect with multi-device Bluetooth, or fast charge
            devices with wireless and 36-watt USB-C charging.
          </p>
        </div>
      </div>

      <div className={glossarySection2} ref={glossarySection2Ref}>
        <div className={style.glossaryText}>
          <h5>Stay Connected</h5>
          <p>
            Instantly connect with multi-device Bluetooth, or fast charge
            devices with wireless and 36-watt USB-C charging.
          </p>
        </div>
        <div className={style.glossaryImg}>
          <LazyLoadImage
            effect="blur"
            PlaceholderSrc={loading}
            src={img2}
            alt=""
          />
        </div>
      </div>

      <div
        className={`${glossarySection3} ${style.lasItem}`}
        ref={glossarySection3Ref}
      >
        <div className={style.glossaryImg}>
          <LazyLoadImage
            effect="blur"
            PlaceholderSrc={loading}
            src={img3}
            alt=""
          />
        </div>
        <div className={style.glossaryText}>
          <h5>Stay Connected</h5>
          <p>
            Instantly connect with multi-device Bluetooth, or fast charge
            devices with wireless and 36-watt USB-C charging.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ModelGlossary;
