import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

export default function Modal({ isOpen, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (isOpen) {
      modal.showModal();
    } else {
      console.log(modal);
    }
  }, [isOpen]);

  return createPortal(
    <dialog className={classes.modal} ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
