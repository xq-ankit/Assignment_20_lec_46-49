import { combineReducers, createStore } from 'redux';
import productsReducer from './reducers/productReducer';

//here I am  Combining the sub-reducers
const rootReducer = combineReducers({
  products: productsReducer,
});

// State type is declare that is taken from the return type of rootreducer
export type State = ReturnType<typeof rootReducer>;


const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()  //this enable us to use redux dev tools
);

export default store;
