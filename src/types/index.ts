import { IProduct } from "../interfaces/product";

export type ProductType = {
  product: IProduct;
};

export type ProductGridType = {
  view: string;
  products: IProduct[];
};
export type SearchType = {
  searchQuery: string;
  setSearchQuery: (s: string) => void;
};

export type ViewType = {
  view: string;
  setView: (s: string) => void;
};
export type SortingType = {
  sorting: string;
  setSorting: (s: string) => void;
};
