import { useState, FunctionComponent } from "react";
import ReactDOM from "react-dom";

import { IModal } from "../../interfaces/modal";
import ModalForm from "./ModalForm";

import "./modal.scss";

const Modal: FunctionComponent<IModal> = ({
  onClose,
  show,
  setShoppingCart,
}) => {
  const [modalContent, setModalContent] = useState(true);

  const textMessage = (
    <div className="modal__text">Order successfully completed! Thanks!</div>
  );

  return ReactDOM.createPortal(
    <div className={`modal${show ? " show" : ""}`} onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {modalContent ? (
          <ModalForm
            setModalContent={setModalContent}
            setShoppingCart={setShoppingCart}
          />
        ) : (
          textMessage
        )}
      </div>
    </div>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById("root")!
  );
};

export default Modal;
