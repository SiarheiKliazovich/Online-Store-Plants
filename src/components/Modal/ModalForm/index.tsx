import React, { useState, useEffect, FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

import { IModalForm } from "../../../interfaces/modalForm";
import { validateDate } from "../../../helpers/validateDate";

import "./modalForm.scss";

const ModalForm: FunctionComponent<IModalForm> = ({
  setModalContent,
  setShoppingCart,
}) => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [nameDirty, setNameDirty] = useState<boolean>(false);
  const [nameError, setNameError] = useState<string>("Cannot be empty");

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneNumberDirty, setPhoneNumberDirty] = useState<boolean>(false);
  const [phoneNumberError, setPhoneNumberError] =
    useState<string>("Cannot be empty");

  const [address, setAddress] = useState<string>("");
  const [addressDirty, setAddressDirty] = useState<boolean>(false);
  const [addressError, setAddressError] = useState<string>("Cannot be empty");

  const [email, setEmail] = useState<string>("");
  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("Cannot be empty");

  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardNumberDirty, setCardNumberDirty] = useState<boolean>(false);
  const [cardNumberError, setCardNumberError] =
    useState<string>("Cannot be empty");

  const [date, setDate] = useState<string>("");
  const [dateDirty, setDateDirty] = useState<boolean>(false);
  const [dateError, setDateError] = useState<string>("Cannot be empty");

  const [cvv, setCvv] = useState<string>("");
  const [cvvDirty, setCvvDirty] = useState<boolean>(false);
  const [cvvError, setCvvError] = useState<string>("Cannot be empty");

  const [classImage, setClassImage] = useState<string>("modal__image");

  const [formValid, setFormValid] = useState<boolean>(false);

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
    e.target.value = e.target.value.replace(/[A-Za-zА-Яа-яЁё/ ]/g, "");
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
    e.target.value = e.target.value.replace(/[A-Za-zА-Яа-яЁё]/g, "");
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
    e.target.value = e.target.value.replace(/[A-Za-zА-Яа-яЁё]/g, "");
    e.target.value = e.target.value.slice(0, 5);

    if (e.target.value.length === 2 && date.length < 3) {
      setDate(e.target.value + "/");
    } else {
      setDate(e.target.value);
    }

    if (!validateDate(e.target.value) || e.target.value.length < 5) {
      setDateError("Invalid date");
    } else {
      setDateError("");
    }
  };

  const cvvHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.target.value = e.target.value.replace(/[A-Za-zА-Яа-яЁё/ ]/g, "");
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
        setClassImage("modal__image american");
        break;
      case 4:
        setClassImage("modal__image visa");
        break;
      case 5:
        setClassImage("modal__image mastercard");
        break;
      default:
        setClassImage("modal__image");
    }
  };

  useEffect(() => {
    changeModalImage();
  }, [cardNumber]);

  const buttonHadler = (): void => {
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
      localStorage.removeItem("cart");
      setTimeout(() => navigate("/"), 3000);
      setShoppingCart([]);
    }
  };

  return (
    <div className="modal__form">
      <fieldset className="modal__personal">
        <legend className="modal__personal-info">Personal information:</legend>
        <label htmlFor="name">First name and last name: </label>
        {nameDirty && nameError && <div className="error">{nameError}</div>}
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => nameHandler(e)}
          onBlur={(e) => blurHandler(e)}
        />
        <label htmlFor="number">Phone number: </label>
        {phoneNumberDirty && phoneNumberError && (
          <div className="error">{phoneNumberError}</div>
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
          <div className="error">{addressError}</div>
        )}
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => addressHandler(e)}
          onBlur={(e) => blurHandler(e)}
        />
        <label htmlFor="email">E-mail: </label>
        {emailDirty && emailError && <div className="error">{emailError}</div>}
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
          <div className="error">{cardNumberError}</div>
        )}
        <input
          type="text"
          id="card"
          value={cardNumber}
          onChange={(e) => cardNumberHandler(e)}
          onBlur={(e) => blurHandler(e)}
        />
        <span className={classImage}></span>
        <label htmlFor="date">Expiry date: </label>
        {dateDirty && dateError && <div className="error">{dateError}</div>}
        <input
          type="text"
          id="date"
          value={date}
          onChange={(e) => dateHandler(e)}
          onBlur={(e) => blurHandler(e)}
        />
        <label htmlFor="cvv">CVV: </label>
        {cvvDirty && cvvError && <div className="error">{cvvError}</div>}
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
};

export default ModalForm;
