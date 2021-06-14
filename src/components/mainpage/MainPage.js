import Login from './auth/Login';
import Register from './auth/Register';
import Cart from './cart/Cart';
import Products from './product/Products';
import { Switch, Route } from 'react-router-dom';
import NotFound from './utils/notFound/NotFound';
import ProductDetail from './utils/productdetail/ProductDetail';
import { useContext } from 'react';
import { GlobalState } from '../../GlobalState';
import History from './history/History';
import OrderDetails from './history/OrderDetails';
import Category from './category/Category';
import CreateProduct from './createproduct/CreateProduct';

function MainPage() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userApi.isLogged;
  return (
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/detail/:id" exact component={ProductDetail} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/login" exact component={isLogged ? NotFound : Login} />
      <Route
        path="/register"
        exact
        component={isLogged ? NotFound : Register}
      />
      <Route path="/history" exact component={isLogged ? History : NotFound} />
      <Route
        path="/category"
        exact
        component={isLogged ? Category : NotFound}
      />
      <Route
        path="/create_product"
        exact
        component={isLogged ? CreateProduct : NotFound}
      />
      <Route
        path="/edit_product/:id"
        exact
        component={isLogged ? CreateProduct : NotFound}
      />
      <Route
        path="/history/:id"
        exact
        component={isLogged ? OrderDetails : NotFound}
      />
      <Route path="*" exact component={NotFound} />
    </Switch>
  );
}

export default MainPage;
