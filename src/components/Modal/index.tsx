import React, { useState, useEffect, FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

import { IModal } from "@/src/interfaces/modal";
import { validateDate } from "@/src/helpers/validateDate";

import "./modal.scss";

const Modal: FunctionComponent<IModal> = ({ onClose, show }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState("Cannot be empty");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberDirty, setPhoneNumberDirty] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState("Cannot be empty");

  const [address, setAddress] = useState("");
  const [addressDirty, setAddressDirty] = useState(false);
  const [addressError, setAddressError] = useState("Cannot be empty");

  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Cannot be empty");

  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberDirty, setCardNumberDirty] = useState(false);
  const [cardNumberError, setCardNumberError] = useState("Cannot be empty");

  const [date, setDate] = useState("");
  const [dateDirty, setDateDirty] = useState(false);
  const [dateError, setDateError] = useState("Cannot be empty");

  const [cvv, setCvv] = useState("");
  const [cvvDirty, setCvvDirty] = useState(false);
  const [cvvError, setCvvError] = useState("Cannot be empty");

  const [clazz, setClazz] = useState("modal__image");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (
      nameError ||
      phoneNumberError ||
      addressError ||
      emailError ||
      cardNumberError ||
      dateError ||
      cvvError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [
    nameError,
    phoneNumberError,
    addressError,
    emailError,
    cardNumberError,
    dateError,
    cvvError,
  ]);

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.id) {
      case "name":
        setNameDirty(true);
        break;
      case "number":
        setPhoneNumberDirty(true);
        break;
      case "address":
        setAddressDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "card":
        setCardNumberDirty(true);
        break;
      case "date":
        setDateDirty(true);
        break;
      case "cvv":
        setCvvDirty(true);
    }
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
    const re = /[а-яА-ЯёЁa-zA-Z]{3,}\s[а-яА-ЯёЁa-zA-Z]{3,}.?/;

    if (!re.test(e.target.value)) {
      setNameError("Invalid name: minimum 2 words, 3 characters each");
    } else {
      setNameError("");
    }
  };

  const phoneNumberHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPhoneNumber(e.target.value);
    const re = /\+?[0-9]{9,}/;

    if (!re.test(e.target.value)) {
      setPhoneNumberError(
        "Invalid phone number: minimum 9 digits starting with +"
      );
    } else {
      setPhoneNumberError("");
    }
  };

  const addressHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAddress(e.target.value);
    const re =
      /[а-яА-ЯёЁa-zA-Z0-9]{5,}\s[а-яА-ЯёЁa-zA-Z0-9]{5,}\s[а-яА-ЯёЁa-zA-Z0-9]{5,}.?/;

    if (!re.test(e.target.value)) {
      setAddressError("Invalid address: minimum 3 words, 5 characters each");
    } else {
      setAddressError("");
    }
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    const re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (!re.test(e.target.value)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };

  const cardNumberHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.target.value = e.target.value.slice(0, 19);

    if (
      (e.target.value.length === 4 && cardNumber.length < 5) ||
      (e.target.value.length === 9 && cardNumber.length < 10) ||
      (e.target.value.length === 14 && cardNumber.length < 15)
    ) {
      setCardNumber(e.target.value + " ");
    } else {
      setCardNumber(e.target.value);
    }

    const re = /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/;

    if (!re.test(e.target.value)) {
      setCardNumberError("Invalid card number");
    } else {
      setCardNumberError("");
    }
  };

  const dateHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.target.value = e.target.value.slice(0, 5);

    if (e.target.value.length === 2 && date.length < 3) {
      setDate(e.target.value + "/");
    } else {
      setDate(e.target.value);
    }

    if (!validateDate(e.target.value)) {
      setDateError("Invalid date");
    } else {
      setDateError("");
    }
  };

  const cvvHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.target.value = e.target.value.slice(0, 3);
    setCvv(e.target.value);
    const re = /\d{3}/;

    if (!re.test(e.target.value)) {
      setCvvError("Invalid cvv");
    } else {
      setCvvError("");
    }
  };

  const changeModalImage = (): void => {
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

  const textMessage = (
    <div className="modal__text">Order successfully completed! Thanks!</div>
  );

  const buttonHadler = () => {
    if (name.length === 0) {
      setNameError("Cannot be empty");
      setNameDirty(true);
      setFormValid(false);
    }
    if (phoneNumber.length === 0) {
      setPhoneNumberError("Cannot be empty");
      setPhoneNumberDirty(true);
      setFormValid(false);
    }
    if (address.length === 0) {
      setAddressError("Cannot be empty");
      setAddressDirty(true);
      setFormValid(false);
    }
    if (email.length === 0) {
      setEmailError("Cannot be empty");
      setEmailDirty(true);
      setFormValid(false);
    }
    if (cardNumber.length === 0) {
      setCardNumberError("Cannot be empty");
      setCardNumberDirty(true);
      setFormValid(false);
    }
    if (date.length === 0) {
      setDateError("Cannot be empty");
      setDateDirty(true);
      setFormValid(false);
    }
    if (cvv.length === 0) {
      setCvvError("Cannot be empty");
      setCvvDirty(true);
      setFormValid(false);
    }

    if (formValid) {
      setModalContent(false);
      setTimeout(() => navigate("/products"), 5000);
    }
  };

  const modalForm = (
    <div className="modal__form">
      <fieldset className="modal__personal">
        <legend className="modal__personal-info">Personal information:</legend>
        <label htmlFor="name">First name and last name: </label>
        {nameDirty && nameError && (
          <div style={{ color: "red" }}>{nameError}</div>
        )}
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => nameHandler(e)}
          onBlur={(e) => blurHandler(e)}
        />
        <label htmlFor="number">Phone number: </label>
        {phoneNumberDirty && phoneNumberError && (
          <div style={{ color: "red" }}>{phoneNumberError}</div>
        )}
        <input
          type="tel"
          id="number"
          value={phoneNumber}
          onChange={(e) => phoneNumberHandler(e)}
          onBlur={(e) => blurHandler(e)}
        />
        <label htmlFor="adress">Delivery adress: </label>
        {addressDirty && addressError && (
          <div style={{ color: "red" }}>{addressError}</div>
        )}
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => addressHandler(e)}
          onBlur={(e) => blurHandler(e)}
        />
        <label htmlFor="email">E-mail: </label>
        {emailDirty && emailError && (
          <div style={{ color: "red" }}>{emailError}</div>
        )}
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => emailHandler(e)}
          onBlur={(e) => blurHandler(e)}
        />
      </fieldset>
      <fieldset className="modal__credit">
        <legend className="modal__credit-card">Credit card details:</legend>
        <label htmlFor="card">Card number: </label>
        {cardNumberDirty && cardNumberError && (
          <div style={{ color: "red" }}>{cardNumberError}</div>
        )}
        <input
          type="text"
          id="card"
          value={cardNumber}
          onChange={(e) => cardNumberHandler(e)}
          onBlur={(e) => blurHandler(e)}
        />
        <span className={clazz}></span>
        <label htmlFor="date">Expiry date: </label>
        {dateDirty && dateError && (
          <div style={{ color: "red" }}>{dateError}</div>
        )}
        <input
          type="text"
          id="date"
          value={date}
          onChange={(e) => dateHandler(e)}
          onBlur={(e) => blurHandler(e)}
        />
        <label htmlFor="cvv">CVV: </label>
        {cvvDirty && cvvError && <div style={{ color: "red" }}>{cvvError}</div>}
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => cvvHandler(e)}
          onBlur={(e) => blurHandler(e)}
        />
      </fieldset>
      <button onClick={buttonHadler} type="submit" className="modal__button">
        Confirm
      </button>
    </div>
  );

  const [modalContent, setModalContent] = useState(true);

  return ReactDOM.createPortal(
    <div className={`modal${show ? " show" : ""}`} onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {modalContent ? modalForm : textMessage}
      </div>
    </div>,
    document.getElementById("root")!
  );
};

export default Modal;
