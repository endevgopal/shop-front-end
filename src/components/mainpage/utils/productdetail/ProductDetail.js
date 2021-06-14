import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GlobalState } from '../../../../GlobalState';
import ProductItem from '../productItem/ProductItem';
function ProductDetail() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.ProductApi.products;
  const addCart = state.userApi.addCart;
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    if (params) {
      products.forEach((product) => {
        if (product._id === params.id) setDetail(product);
      });
    }
  }, [params, products]);

  if (detail.length === 0) return null;

  

  return (
    <>
      <div className="detail">
        <img src={detail.images.url} alt="" />
        <div className="box-detail">
          <div className="row">
            <h2>{detail.title}</h2>
            <h6>#id: {detail.product_id}</h6>
          </div>
          <span>USD {detail.price}</span>
          <p>{detail.description}</p>
          <p>{detail.content}</p>
          <p>Sold: {detail.sold}</p>
          <Link to="/cart" className="cart" onClick={() => addCart(detail)}>
            Buy Now
          </Link>
        </div>
      </div>
      <div className="related">
        <h2>Related products</h2>
        <div className="products">
          {products.map((product) => {
            return product.category === detail.category ? (
              <ProductItem key={product._id} product={product} />
            ) : null;
          })}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
