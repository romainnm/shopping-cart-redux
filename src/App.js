import { connect } from "react-redux";
// Route
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Page & Components
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
// Data
import data from "./data";
// Action
import { LOAD_DATA, GET_CART_TOTALS } from "./actions";
import { useEffect } from "react";

function App({ cart, dispatch }) {
  useEffect(() => {
    dispatch({ type: LOAD_DATA, payload: data })
    dispatch({ type: GET_CART_TOTALS });
  }, [cart]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps)(App);
