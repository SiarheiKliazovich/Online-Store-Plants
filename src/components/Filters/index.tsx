import "./Filters.css";

const Filter = () => {
  return (
    <>
      <div className="filter">
        <div className="filter__panel">
          <p className="filter__panel_text">Refine Search</p>
        </div>
        <div className="filter__color">
          <ul className="list__color">
            <li className="filter__color_item">
              <a className="color-item__link" href="">
                Black
              </a>
              <span className="count">(4)</span>
            </li>
            <li className="filter__color_item">
              <a className="color-item__link" href="">
                Blue
              </a>
              <span className="count">(4)</span>
            </li>
            <li className="filter__color_item">
              <a className="color-item__link" href="">
                Pink
              </a>
              <span className="count">(4)</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Filter;
