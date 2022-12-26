import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import "./notFound.scss";

const NotFound: FunctionComponent = () => {
  return (
    <div className="not-found vh">
      <Link className="not-found__button" to="/">
        Main
      </Link>
    </div>
  );
};

export default NotFound;
