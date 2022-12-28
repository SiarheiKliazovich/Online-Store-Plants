export interface ICategories {
  title: string;
  filtered: number;
  allProductsCount: number;
}
export interface IBrands {
  title: string;
  filtered: number;
  allBrandCount: number;
}

export interface IProdFilter {
  categories: ICategories[];
  brands: IBrands[];
  prices: number[];
  stocks: number[];
}
