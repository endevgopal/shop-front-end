import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import CategoriesApi from './api/CategoriesApi';
import ProductApi from './api/ProductApi';
import UserApi from './api/UserApi';
export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const state = {
    token: [token, setToken],
    ProductApi: ProductApi(),
    userApi: UserApi(token),
    categoriesApi: CategoriesApi(token),
  };
  useEffect(() => {
    const firstLogin = localStorage.getItem('userLogin');
    if (firstLogin) {
      const refreshToken = async () => {
       
        const res = await axios.get('https://acdc-api21.herokuapp.com/user/refreshToken');
        setToken(res.data.token);
      };
      setTimeout(() => {
        refreshToken();
      }, 10 * 60000);
      refreshToken();
    }
  }, []);
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
