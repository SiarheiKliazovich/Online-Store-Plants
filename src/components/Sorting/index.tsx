import "./Sorting.scss";
import { FunctionComponent } from "react";
import { SortingType } from "../../types";

const Sorting: FunctionComponent<SortingType> = ({
  sorting,
  setSorting,
}: SortingType) => (
  <div className="sorting__wrapper">
    <select
      className="form-select"
      value={sorting}
      onChange={(event) => setSorting(event.target.value)}
    >
      <option value={""} disabled>
        Select sort:
      </option>
      <option value={"ratingASC"}>Sort by Rating ASC</option>
      <option value={"ratingDESC"}>Sort by Rating DESC</option>
      <option value={"priceASC"}>Sort by Price ASC</option>
      <option value={"priceDESC"}>Sort by Price DESC</option>
    </select>
  </div>
);

export default Sorting;
