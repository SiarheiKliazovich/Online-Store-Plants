import { FunctionComponent } from "react";
import classNames from "classnames";
import "./View.scss";

type ViewType = {
  view: string;
  setView: (s: string) => void;
};

const View: FunctionComponent<ViewType> = ({ view, setView }: ViewType) => {
  return (
    <div className="view">
      <nav className="view__wrapper">
        <button
          className={classNames("btn__view_column", {
            "btn-active": view === "grid",
          })}
          onClick={() => setView("grid")}
        ></button>
        <button
          className={classNames("btn__view_string", {
            "btn-active": view === "line",
          })}
          onClick={() => setView("line")}
        ></button>
      </nav>
    </div>
  );
};
export default View;
