import { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsLoadingSelector, productsSelector } from './selectors/products';
import { loadProductsAction, productsLoadedAction } from './actions/products';
import axios from 'axios';

type ProductListPageProps = {};

const ProductListPage: FC<ProductListPageProps> = () => {
  const loading = useSelector(productsLoadingSelector);
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsAction());
    axios.get("https://myeasykart.codeyogi.io/products")
    .then((response)=>{
        dispatch(productsLoadedAction(response.data.data))
    })
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {products && products.map((p:any) => (
        <div className='text-3xl text-red-600' key={p.id}>
          {p.title} (Rs. {p.price})
        </div>
      ))}
    </div>
  );
};

ProductListPage.defaultProps = {};

export default memo(ProductListPage);
