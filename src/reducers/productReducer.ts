import { produce } from 'immer';
import { AnyAction } from 'redux';
import Product from '../models/Product';
import { LOAD_PRODUCTS, PRODUCTS_LOADED } from '../actions/products';

type State = {
  products: Product[];
  loading: boolean;
};

const initialState: State = {
  products: [],
  loading: false,
};

function productsReducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case PRODUCTS_LOADED:
      return produce(state, (draft) => {
        draft.products = action.payload;
        draft.loading = false;
      });
    default:
      return state;
  }
}

export default productsReducer;
