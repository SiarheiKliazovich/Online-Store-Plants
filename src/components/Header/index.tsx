import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo"></div>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item"></li>
              <li className="header__item"></li>
              <li className="header__item"></li>
            </ul>
          </nav>
          <div className="header__basket">
            <span className="basket__image"></span>
            <div className="basket__text">
              <p className="basket__name">My Cart</p>
              <p className="basket__count">Items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
