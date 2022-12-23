import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <nav className="footer__nav vl">
            <ul className="footer__list">
              <li className="footer__item"></li>
              <li className="footer__item"></li>
              <li className="footer__item"></li>
            </ul>
          </nav>
          <div className="footer__github vl">
            <a
              className="footer__github-link"
              href="https://github.com/SiarheiKliazovich"
            ></a>
            <a
              className="footer__github-link"
              href="https://github.com/anast-ananko"
            ></a>
          </div>
          <div className="footer__text">
            <a className="footer__rs" href="https://rs.school/js/"></a>
            <span className="footer__year">2023</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
