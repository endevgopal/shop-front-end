import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import './history.css';
function OrderDetails() {
  const state = useContext(GlobalState);
  const [history] = state.userApi.history;
  const [orderDetails, setOrderDetails] = useState([]);
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      history.forEach((item) => {
        if (item._id === params.id) setOrderDetails(item);
      });
    }
  }, [params.id, history]);
  if (orderDetails.length === 0) return null;
  return (
    <div className="history_page">
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Address</td>
            <td>Postal Code</td>
            <td>Country Code</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{orderDetails.address.recipient_name}</td>
            <td>
              {orderDetails.address.line1 + ' - ' + orderDetails.address.city}
            </td>
            <td>{orderDetails.address.postal_code}</td>
            <td>{orderDetails.address.country_code}</td>
          </tr>
        </tbody>
      </table>
      <table style={{ margin: '30px 0px' }}>
        <thead>
          <tr>
            <td>Product Pic</td>
            <td>Title</td>
            <td>Quantity</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {orderDetails.cart.map((item) => (
            <tr key={item._id}>
              <td>
                <img src={item.images.url} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderDetails;
