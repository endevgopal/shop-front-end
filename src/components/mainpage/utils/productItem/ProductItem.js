import React from 'react';
import BtnRender from './BtnRender';

function ProductItem({
  product,
  isAdmin,
  callback,
  setCallBack,
  handleCheck,
  deleteProduct,
}) {
  return (
    <div className="product_card">
      {isAdmin && (
        <input
          type="checkbox"
          checked={product.checked}
          onChange={() => handleCheck(product._id)}
        />
      )}
      <img src={product.images.url} alt="" />
      <div className="product_box">
        <h2 title={product.title}>{product.title}</h2>
        <span>USD {product.price}</span>
        <p>{product.description}</p>
      </div>
      {
        <BtnRender
          product={product}
          isAdmin={isAdmin}
          callback={callback}
          setCallBack={setCallBack}
          deleteProduct={deleteProduct}
        />
      }
    </div>
  );
}

export default ProductItem;
