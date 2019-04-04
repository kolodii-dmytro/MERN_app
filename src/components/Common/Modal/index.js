import React from "react";
import ReactDOM from 'react-dom';
import styles from './modal.css';

 const Modal = (props) => {
  const {isOpened, onClose, children} = props;

  return isOpened ? ReactDOM.createPortal(
    <div className="modal">
        <div className="modalClose" onClick={onClose}>
            &times;
        </div>
        {children}
    </div> ,  document.body) : null
}



export default Modal