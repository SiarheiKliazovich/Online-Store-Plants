import "./Search.scss";
import { FunctionComponent } from "react";

type SearchType = {
  searchQuery: string;
  setSearchQuery: (s: string) => void;
};
const Search: FunctionComponent<SearchType> = ({
  searchQuery,
  setSearchQuery,
}: SearchType) => (
  <div className="search__wrapper">
    <input
      value={searchQuery}
      className="input-search"
      type="search"
      placeholder="Search product"
      onChange={(event) => setSearchQuery(event.target.value)}
    />
  </div>
);

export default Search;
