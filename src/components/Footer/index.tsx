import { FunctionComponent } from "react";

import "./footer.scss";

const Footer: FunctionComponent = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__github">
            <a
              className="footer__github-link"
              href="https://github.com/SiarheiKliazovich"
              target="_blank"
            ></a>
            <a
              className="footer__github-link"
              href="https://github.com/anast-ananko"
              target="_blank"
            ></a>
          </div>
          <div className="footer__year">2023</div>
          <a
            className="footer__rs"
            href="https://rs.school/js/"
            target="_blank"
          ></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
