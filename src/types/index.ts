import { IProduct } from "../interfaces/product";
import { IFilter } from "../interfaces/filter";

export type ProductType = {
  product: IProduct;
};

export type ProductGridType = {
  view: string;
  products: IProduct[];
};

export type SearchType = {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
};

export type ViewType = {
  view: string;
  setView: (view: string) => void;
};

export type SortingType = {
  sorting: string;
  setSorting: (sorting: string) => void;
};

export type FiltersType = {
  filters: IFilter;
  setFilters: (filters: IFilter) => void;
  productList: IProduct[];
  filterReset: () => void;
};
