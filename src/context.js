/* import React, { useContext, useState, useEffect } from "react";
import data from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Cherry Pie",
      price: 11,
      amount: 1,
      img: "./images/cherry.jpeg",
    },
  ]);
  const [cartAmount, setCartAmount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [checkout, setCheckout] = useState(false); */

  /* udpate subtotal and amount of items */
/*   useEffect(() => {
    cart.reduce(
      (cartTotal, cartItem) => {
        cartTotal.amount += cartItem.amount;
        cartTotal.total += cartItem.amount * cartItem.price;
        setCartAmount(cartTotal.amount);
        setCartTotal(cartTotal.total);
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
  }, [cart]); */

  /* Functions */
/*   const addToCart = (item, element) => {
    let checkItem = cart.find((cartItem) => cartItem.id === item.id);
    if (!checkItem) {
      setCart([...cart, item]);
    } else {
      setCart(
        cart.map((cartItem) => {
          if (cartItem.id === item.id) {
            const newAmount = cartItem.amount + item.amount;
            return { ...cartItem, amount: newAmount };
          }
          return cartItem;
        })
      );
    }
    changeButtonStyle(element);
    resetProductList();
  };
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };
  const toggleAmount = (id, value) => {
    setCheckout(false);
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          if (value === "increase") {
            const newAmount = product.amount + 1;
            return { ...product, amount: newAmount };
          }
          if (value === "decrease") {
            let newAmount = product.amount - 1;
            if (newAmount <= 1) {
              return { ...product, amount: 1 };
            }
            return { ...product, amount: newAmount };
          }
        }
        return product;
      })
    );
  };
  const toggleAmountCart = (id, value) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          if (value === "increase") {
            const newAmount = item.amount + 1;
            return { ...item, amount: newAmount };
          }
          if (value === "decrease") {
            let newAmount = item.amount - 1;
            if (newAmount <= 1) {
              return { ...item, amount: 1 };
            }
            return { ...item, amount: newAmount };
          }
        }
        return item;
      })
    );
  };
  const openCheckout = () => {
    setCheckout(true);
  };
  const closeCheckout = () => {
    setCheckout(false);
  };
  const changeButtonStyle = (element) => {
    element.innerText = "Added!";
    element.classList.add("green");
    setTimeout(() => {
      element.innerText = "Add to cart";
      element.classList.remove("green");
    }, 2500);
  };
  const resetProductList = () => {
    setProducts(data);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        toggleAmount,
        toggleAmountCart,
        checkout,
        openCheckout,
        closeCheckout,
        cartAmount,
        cartTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export { AppProvider }; */
