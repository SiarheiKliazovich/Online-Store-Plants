import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo"></div>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <Link className="header__link" to="/">
                  Home
                </Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to="/products">
                  Products
                </Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <Link className="header__link" to="/cart">
            <div className="header__basket">
              <span className="basket__image"></span>
              <div className="basket__text">
                <p className="basket__name">My Cart</p>
                <p className="basket__count">Items</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
