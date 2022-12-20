import "./Sorting.scss";
import { FunctionComponent } from "react";

type SortingType = {
  sorting: string;
  setSorting: (s: string) => void;
};

const Sorting: FunctionComponent<SortingType> = ({
  sorting,
  setSorting,
}: SortingType) => (
  <div className="sorting__wrapper">
    <select
      className="form-select"
      name=""
      id=""
      value={sorting}
      onChange={(event) => setSorting(event.target.value)}
    >
      <option value={"ratingASC"}>Sort by Rating ASC</option>
      <option value={"ratingDESC"}>Sort by Rating DESC</option>
      <option value={"priceASC"}>Sort by Price ASC</option>
      <option value={"priceDESC"}>Sort by Price DESC</option>
    </select>
  </div>
);

export default Sorting;
