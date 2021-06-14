import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { GlobalState } from '../../../../GlobalState';
import './btnRender.css';

function BtnRender({ product, isAdmin, deleteProduct }) {
  const state = useContext(GlobalState);

  const addCart = state.userApi.addCart;
  console.log();
  return (
    <div className="row_btn">
      {isAdmin ? (
        <NavLink id="btn_buy" to={`/edit_product/${product._id}`}>
          Edit
        </NavLink>
      ) : (
        <NavLink id="btn_buy" to="#!" onClick={() => addCart(product)}>
          Buy
        </NavLink>
      )}
      {isAdmin ? (
        <NavLink
          id="btn_view"
          to="/"
          onClick={() => deleteProduct(product._id, product.images.public_id)}
        >
          Delete
        </NavLink>
      ) : (
        <NavLink id="btn_view" to={`/detail/${product._id}`}>
          View
        </NavLink>
      )}
    </div>
  );
}

export default BtnRender;
