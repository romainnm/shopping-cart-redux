import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// Redux Installation :
// - npm install --save redux
// - npm install --save react-redux (Provider)
// - npm install --save-dev redux-devtools

// Redux Setup
import reducer from "./reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

// Set initial Store values
const initialStore = {
  products: [],
  cart: [],
  cartAmount: 0,
  cartTotal: 0,
  checkout: false,
};
// Create Store
const store = createStore(
  reducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
