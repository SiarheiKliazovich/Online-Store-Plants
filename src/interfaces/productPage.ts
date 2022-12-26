export interface IProductPage {
  inShoppingCart: number[];
  addInShoppingCart: (id: number) => void;
}
