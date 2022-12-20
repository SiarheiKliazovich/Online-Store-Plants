import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./modal.scss";

interface Props {
  onClose: () => void;
  show: boolean;
}

const Modal = ({ onClose, show }: Props) => {
  const [cardNumber, setCardNumber] = useState("");
  const [clazz, setClazz] = useState("modal__image");

  const onValueCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const changeModalImage = () => {
    const firstNumberCard = +cardNumber.slice(0, 1);
    switch (firstNumberCard) {
      case 3:
        setClazz("modal__image american");
        break;
      case 4:
        setClazz("modal__image visa");
        break;
      case 5:
        setClazz("modal__image mastercard");
        break;
      default:
        setClazz("modal__image");
    }
  };

  useEffect(() => {
    changeModalImage();
  }, [cardNumber]);

  return ReactDOM.createPortal(
    <div className={`modal${show ? " show" : ""}`} onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__form">
          <fieldset className="modal__personal">
            <legend className="modal__personal-info">
              Personal information:
            </legend>
            <label htmlFor="name">First name and last name: </label>
            <input type="text" id="name" required />
            <label htmlFor="number">Phone number: </label>
            <input type="tel" id="number" />
            <label htmlFor="adress">Delivery adress: </label>
            <input type="text" id="adress" />
            <label htmlFor="email">E-mail: </label>
            <input type="email" id="email" />
          </fieldset>
          <fieldset className="modal__credit">
            <legend className="modal__credit-card">Credit card details:</legend>
            <label htmlFor="card">Card number: </label>
            <input
              type="number"
              id="card"
              value={cardNumber}
              onChange={onValueCardNumberChange}
            />
            <span className={clazz}></span>
            <label htmlFor="date">Expiry date: </label>
            <input type="number" id="date" />
            <label htmlFor="cvv">Delivery adress: </label>
            <input type="number" id="cvv" />
          </fieldset>
        </div>
      </div>
    </div>,
    document.getElementById("root")!
  );
};

export default Modal;
