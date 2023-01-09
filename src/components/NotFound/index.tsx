import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import "./notFound.scss";

const NotFound: FunctionComponent = () => {
  return (
    <div className="not-found-page vh">
      <Link className="not-found-page__button" to="/">
        Main
      </Link>
    </div>
  );
};

export default NotFound;
