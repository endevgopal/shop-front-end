import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../../GlobalState';
import './cart.css';
import PayPalButton from './PayPalButton';
import { toast } from 'react-toastify';

function Cart() {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.userApi.cart;
  const [token] = state.token;
  const [total, setTotal] = useState(0);
  const [callBack, setCallBack] = state.userApi.callBack;

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(total);
    };
    getTotal();
  }, [cart]);

  if (cart.length === 0)
    return (
      <h2 style={{ textAlign: 'center', fontSize: '5rem' }}>Cart is Empty</h2>
    );

  const addToCart = async (cart) => {
    await axios.post(
      'https://acdc-api21.herokuapp.com/user/addToCart',
      { cart },
      {
        headers: { Authorization: token },
      }
    );
  };

  const decrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });
    setCart([...cart]);
    addToCart(cart);
  };

  const increment = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }
    });
    setCart([...cart]);
    addToCart(cart);
  };

  const removeItem = (id) => {
    if (window.confirm('Do you want to delete this product?')) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
      addToCart(cart);
    }
  };

  const tranSuccess = async (payment) => {
    console.log(payment);
    const { paymentID, address } = payment;
    await axios.post(
      'https://acdc-api21.herokuapp.com/api/payment',
      { cart, paymentID, address },
      {
        headers: { Authorization: token },
      }
    );
    setCart([]);
    addToCart([]);
    setCallBack(!callBack);
    toast.success('Order placed.', { position: 'bottom-right' });
  };

  return (
    <div>
      <div className="total">
        <h3>Total: USD {total}</h3>
        <PayPalButton total={total} tranSuccess={tranSuccess} />
      </div>
      {cart.map((product, index) => (
        <div className="detail cart " key={index}>
          <img src={product.images.url} alt="" className="img_container" />
          <div className="box-detail">
            <h2>{product.title}</h2>

            <span>INR {product.price * product.quantity}</span>
            <p>Sold: {product.sold}</p>
            <div className="amount">
              <button onClick={() => decrement(product._id)}> - </button>
              <span>{product.quantity}</span>
              <button onClick={() => increment(product._id)}> + </button>
            </div>
            <div className="delete" onClick={() => removeItem(product._id)}>
              X
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
