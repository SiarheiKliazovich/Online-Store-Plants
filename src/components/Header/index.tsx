import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link className="header__link" to="/products">
            <div className="header__logo"></div>
          </Link>
          <div className="header__sum">5000</div>
          <Link className="header__link" to="/cart">
            <div className="header__cart">
              <span className="cart__image"></span>
              <div className="cart__text">
                <p className="cart__name">My Cart</p>
                <p className="cart__count">Items</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
