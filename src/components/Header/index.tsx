import { FunctionComponent } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { HeaderType } from "../../types";

const Header: FunctionComponent<HeaderType> = ({
  sumPrices,
  sumCount,
}: HeaderType) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link className="header__link" to="/">
            <div className="header__logo"></div>
          </Link>
          <div className="header__sum">
            <span className="header__sum_title"> Cart total: </span>
            {sumPrices}
          </div>
          <Link className="header__link" to="/cart">
            <div className="header__cart">
              <span className="cart__image"></span>
              <div className="cart__text">
                <p className="cart__name">My Cart</p>
                <p className="cart__count">{sumCount} Items</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
