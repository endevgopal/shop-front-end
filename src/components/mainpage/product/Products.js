import { useContext, useState } from 'react';
import { GlobalState } from '../../../GlobalState';
import Loader from '../utils/loader/Loader';
import ProductItem from '../utils/productItem/ProductItem';
import { toast } from 'react-toastify';
import axios from 'axios';
import Filter from './Filter';
import LoadMore from '../utils/loader/LoadMore';

function Products() {
  const state = useContext(GlobalState);
  const [products, setProducts] = state.ProductApi.products;
  const [callback, setCallBack] = state.ProductApi.callback;
  const [isCheck, setIsCheck] = useState(false);
  const [isAdmin] = state.userApi.isAdmin;
  const [token] = state.token;
  const [loading, setLoading] = useState(false);

  const deleteProduct = async (id, public_id) => {
    setLoading(true);
    const res = axios.delete(`https://acdc-api21.herokuapp.com/api/products/${id}`, {
      headers: { Authorization: token },
    });
    const imgDelete = axios.post(
      'https://acdc-api21.herokuapp.com/api/destroy',
      { public_id: public_id },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    await res;
    await imgDelete;
    await setCallBack(!callback);
    setLoading(false);
    toast.success(res);
  };

  const handleCheck = (id) => {
    products.forEach((item) => {
      if (item._id === id) {
        item.checked = !item.checked;
      }
    });
    setProducts([...products]);
  };

  const checkAll = () => {
    products.forEach((item) => {
      item.checked = !item.checked;
    });
    setProducts([...products]);
    setIsCheck(!isCheck);
  };
  const deleteAll = () => {
    products.forEach((item) => {
      if (item.checked) deleteProduct(item._id, item.images.public_id);
    });
  };
  return (
    <>
      <Filter />
      {isAdmin && (
        <div className="delete_all">
          <span>Select all</span>
          <input type="checkbox" checked={isCheck} onChange={checkAll} />
          <button onClick={deleteAll}>Delete All</button>
        </div>
      )}
      <div className="products">
        {loading ? (
          <Loader />
        ) : (
          products.map((product) => {
            return (
              <ProductItem
                key={product._id}
                product={product}
                isAdmin={isAdmin}
                callback={callback}
                setCallBack={setCallBack}
                setProducts={setProducts}
                handleCheck={handleCheck}
                deleteProduct={deleteProduct}
              />
            );
          })
        )}
      </div>
      <LoadMore/>
      {products.length === 0 && (
        <div className="no_product"> No Product available</div>
      )}
    </>
  );
}

export default Products;
