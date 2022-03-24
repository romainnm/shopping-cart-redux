import { useGlobalContext } from "../context";
/* Icons */
import { IoClose } from "react-icons/io5";
import { BiTrash } from "react-icons/bi";
import { FaPlus, FaMinus } from "react-icons/fa";

const CheckoutSidebar = () => {
  const {
    cart,
    closeCheckout,
    removeFromCart,
    cartAmount,
    cartTotal,
    checkout,
    toggleAmountCart,
  } = useGlobalContext();
  
  // If empty cart
  if (cart.length === 0) {
    return (
      <div
        className={`${
          checkout ? "checkout-container show-checkout" : "checkout-container"
        }`}
      >
        <div className="checkout-header">
          <h3>Cart</h3>
          <button type="button" onClick={closeCheckout}>
            <IoClose />
          </button>
        </div>
        <h1>Your cart is empty!</h1>
      </div>
    );
  }

  // If cart had items
  return (
    <div
      className={`${
        checkout ? "checkout-container show-checkout" : "checkout-container"
      }`}
    >
      <div className="checkout-header">
        <h3>CHECKOUT</h3>
        <button type="button" onClick={closeCheckout}>
          <IoClose />
        </button>
      </div>

      {/* List of cart item */}
      <div className="checkout-product-list">

        {/* Display cart item */}
        {cart.map((cartItems) => {
          const { id, name, price, amount, img } = cartItems;
          return (
            <div key={id} className="checkout-product">
              <div className="checkout-left">
                {/* Control Amount */}
                <div className="product-quantity">
                  <button
                    type="submit"
                    onClick={() => toggleAmountCart(id, "increase")}
                  >
                    <FaPlus />
                  </button>
                  <p>
                    <span className="yellow"> x</span>
                    {amount}
                  </p>
                  <button
                    type="submit"
                    onClick={() => toggleAmountCart(id, "decrease")}
                  >
                    <FaMinus />
                  </button>
                </div>
                <div className="img-checkout">
                  <img src={img} alt={name} />
                </div>
                <p>
                  {name} (<span className="blue">${price}</span>){" "}
                </p>
              </div>
              <button type="submit" onClick={() => removeFromCart(id)}>
                <BiTrash />
              </button>
            </div>
          );
        })}
      </div>
      <h4>
        Subtotal:
        <span className="blue"> ${cartTotal}</span>
      </h4>
      <h5>({cartAmount} items)</h5>
      <button className="btn checkout-button">Proceed to Checout</button>
    </div>
  );
};

export default CheckoutSidebar;
