import React from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../app/store";

import styles from "../../style/modals.module.css";

function Modal(props) {
  const dispatch = useDispatch();

  const backdropHandler = () => {
    dispatch(actions.hideMenu());
  };
  const showMenu = useSelector((state) => state.showMenu);

  const backdropStyle = showMenu
    ? `${styles.backdrop} ${styles.FadeIn}`
    : `${styles.backdrop} ${styles.FadeOut}`;
  const modalStyle = showMenu
    ? `${styles.modal} ${styles.FadeIn}`
    : `${styles.modal} ${styles.FadeOut}`;

  const Backdrop = (props) => {
    return <div onClick={props.onClose} className={backdropStyle}></div>;
  };
  const ModalOverlay = (props) => {
    return <div className={modalStyle}>{props.children}</div>;
  };
  const element = document.getElementById("modal");

  return (
    <React.Fragment>
      {
        <div>
          {ReactDom.createPortal(
            <Backdrop onClose={backdropHandler} />,
            document.getElementById("modal")
          )}

          {ReactDom.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            element
          )}
        </div>
      }
    </React.Fragment>
  );
}

export default Modal;
