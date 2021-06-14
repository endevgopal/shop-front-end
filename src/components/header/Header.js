import React, { useContext, useState } from 'react';
import { GlobalState } from '../../GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faShoppingCart,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import './header.css';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userApi.isLogged;
  const [isAdmin, setIsIsAdmin] = state.userApi.isAdmin;
  const [cart, setCart] = state.userApi.cart;
  const [menu, setMenu] = useState(false);
  const logout = async () => {
    await axios.get( `https://acdc-api21.herokuapp.com/user/logout`);
    localStorage.clear();
    setIsIsAdmin(false);
    setIsLogged(false);
    setCart([]);
  };

  const loggedRoute = () => {
    return (
      <>
        <li onClick={() => setMenu(!menu)}>
          <NavLink exact={true} to="/history" activeClassName="active_class">
            History
          </NavLink>
        </li>
        <li onClick={() => setMenu(!menu)}>
          <NavLink exact={true} to="/" onClick={logout}>
            Logout
          </NavLink>
        </li>
      </>
    );
  };
  const adminRoute = () => {
    return (
      <>
        <li onClick={() => setMenu(!menu)}>
          <NavLink
            exact={true}
            activeClassName="active_class"
            to="/create_product"
          >
            Create Product
          </NavLink>
        </li>
        <li onClick={() => setMenu(!menu)}>
          <NavLink exact="true" activeClassName="active_class" to="/category">
            Category
          </NavLink>
        </li>
      </>
    );
  };
  const toggleMenu = () => setMenu(!menu);
  const styleMenu = {
    left: menu ? 0 : '-100%',
  };

  return (
    <header>
      <div className="menu" onClick={() => setMenu(!menu)}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">{isAdmin ? 'Admin' : 'My shop'}</Link>
        </h1>
      </div>
      <ul style={styleMenu}>
        <li onClick={() => setMenu(!menu)}>
          <NavLink to="/" exact activeClassName="active_class">
            {isAdmin ? 'Products' : 'Shop'}
          </NavLink>
        </li>
        {isAdmin && adminRoute()}
        {isLogged ? (
          loggedRoute()
        ) : (
          <li onClick={() => setMenu(!menu)}>
            <NavLink exact to="/Login" activeClassName="active_class">
              Login & Register
            </NavLink>
          </li>
        )}

        <li onClick={() => setMenu(!menu)}>
          <FontAwesomeIcon icon={faTimes} width="30" className="menu" />
        </li>
      </ul>

      <div className="cart-icon">
        <span>{cart.length}</span>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} width="30" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
