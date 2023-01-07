import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import ModalForm from "../components/Modal/ModalForm";

it("renders modal form", () => {
  const setModalContent = jest.fn();
  const setShoppingCart = jest.fn();
  const modalForm = render(
    <Router>
      <ModalForm
        setModalContent={setModalContent}
        setShoppingCart={setShoppingCart}
      />
    </Router>
  );
  expect(modalForm).toMatchSnapshot();
});
