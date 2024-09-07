import { State } from "../store";

export function productsLoadingSelector(state: State) {
  return state.products.loading;
}

export function productsSelector(state: State) {
  return state.products.products;
}
