import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
// Icons
import { GiPieSlice } from "react-icons/gi";
import { RiShoppingCart2Fill } from "react-icons/ri";
// Components
import CheckoutSidebar from "./CheckoutSidebar";

const Header = () => {
  const { openCheckout, cartAmount, closeCheckout } = useGlobalContext();
  return (
    <div className="container-center header-container">
      <h1 className="logo">
        <Link to="/">
          Happy Pie <GiPieSlice className="logo-icon" />
        </Link>
      </h1>
      <div className="navigation">
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-link" onClick={closeCheckout}>
                home
              </Link>
            </li>
            <li>
              <Link to="/Shop" className="nav-link" onClick={closeCheckout}>
                Shop
              </Link>
            </li>
          </ul>
        </nav>
        <div className="shopping-cart">
          <button
            type="button"
            className="cart-button btn"
            onClick={openCheckout}
          >
            <RiShoppingCart2Fill className="cart-icon" /> ({cartAmount})
          </button>
        </div>
      </div>
      {/* Checkout sidebar is hidden with CSS */}
      <CheckoutSidebar />
    </div>
  );
};

export default Header;
