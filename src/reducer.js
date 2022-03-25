import data from "./data";
import { setMinMaxAmount, changeButtonStyle } from "./utils/helpers";
import {
  LOAD_DATA,
  OPEN_CHECKOUT,
  CLOSE_CHECKOUT,
  TOGGLE_AMOUNT,
  ADD_TO_CART,
  REMOVE_CART,
  UPDATE_CART_AMOUNT,
  GET_CART_TOTALS,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === LOAD_DATA) {
    return { ...state, products: action.payload };
  }
  // SIDEBAR ACTIONS
  if (action.type === OPEN_CHECKOUT) {
    return { ...state, checkout: true };
  }
  if (action.type === CLOSE_CHECKOUT) {
    return { ...state, checkout: false };
  }
  // PRODUCT LIST ACTIONS
  if (action.type === TOGGLE_AMOUNT) {
    let tempProduct = state.products.map((product) => {
      if (
        product.id === action.payload.id &&
        action.payload.value === "increase"
      ) {
        let newAmount = setMinMaxAmount(product.amount + 1);
        return { ...product, amount: newAmount };
      }
      if (
        product.id === action.payload.id &&
        action.payload.value === "decrease"
      ) {
        let newAmount = setMinMaxAmount(product.amount - 1);

        return { ...product, amount: newAmount };
      }
      return product;
    });
    return {
      ...state,
      products: tempProduct,
      checkout: false,
    };
  }
  if (action.type === ADD_TO_CART) {
    let checkProduct = state.cart.find(
      (product) => product.id === action.payload.product.id
    );
    // Product doesnt exist -> Add new product to cart
    if (!checkProduct) {
      const newCart = [...state.cart, action.payload.product];
      changeButtonStyle(action.payload.value);
      return { ...state, cart: newCart };
    }
    // Product exist -> updating product amount
    else {
      // tempCart with an updated value of the product
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.product.id) {
          const newAmount = cartItem.amount + action.payload.product.amount;
          return { ...cartItem, amount: newAmount };
        }
        return cartItem;
      });
      changeButtonStyle(action.payload.value);
      const resetProducts = [...data];
      return { ...state, products: resetProducts, cart: tempCart };
    }
  }
  // CHECKOUT PAGE ACTION
  if (action.type === REMOVE_CART) {
    let newCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload
    );
    return { ...state, cart: newCart };
  }

  if (action.type === UPDATE_CART_AMOUNT) {
    let tempCart = state.cart.map((cartItem) => {
      if (
        cartItem.id === action.payload.id &&
        action.payload.value === "increase"
      ) {
        let newAmount = setMinMaxAmount(cartItem.amount + 1);
        return { ...cartItem, amount: newAmount };
      }
      if (
        cartItem.id === action.payload.id &&
        action.payload.value === "decrease"
      ) {
        let newAmount = setMinMaxAmount(cartItem.amount - 1);
        return { ...cartItem, amount: newAmount };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === GET_CART_TOTALS) {
    const getTotals = state.cart.reduce(
      (cartTotal, cartItem) => {
        cartTotal.amount += cartItem.amount;
        cartTotal.total += cartItem.amount * cartItem.price;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    return {
      ...state,
      cartAmount: getTotals.amount,
      cartTotal: getTotals.total,
    };
  }

  return state;
};

export default reducer;
