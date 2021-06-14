import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function UserApi(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsIsAdmin] = useState(false);
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);
  const [callBack, setCallBack] = useState(false);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get( `https://acdc-api21.herokuapp.com/user/info`, {
            headers: { Authorization: token },
          });
          setIsLogged(true);
          res.data.user.role === 1 ? setIsIsAdmin(true) : setIsIsAdmin(false);
        } catch (error) {
          toast.error(error);
        }
      };
      getUser();
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      const getHistory = async () => {
        if (isAdmin) {
          const res = await axios.get( `https://acdc-api21.herokuapp.com/api/payment`, {
            headers: { Authorization: token },
          });
          setHistory(res.data);
        } else {
          const res = await axios.get( `https://acdc-api21.herokuapp.com/user/history`, {
            headers: { Authorization: token },
          });
          setHistory(res.data);
        }
      };
      getHistory();
    }
  }, [token, callBack, isAdmin]);

  const addCart = async (product) => {
    if (!isLogged) return toast.error('Please login to continue buying');

    const check = cart.every((item) => {
      return item._id !== product._id;
    });

    if (check) {
      setCart([...cart, { ...product, quantity: 1 }]);
      await axios.post(
         `https://acdc-api21.herokuapp.com/user/addToCart`,
        {
          cart: [...cart, { ...product, quantity: 1 }],
        },
        {
          headers: { Authorization: token },
        }
      );
      toast.success('Item added into cart.', { position: 'top-left' });
    } else {
      alert('already added');
    }
  };

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsIsAdmin],
    addCart: addCart,
    cart: [cart, setCart],
    history: [history, setHistory],
    callBack: [callBack, setCallBack],
  };
}

export default UserApi;
