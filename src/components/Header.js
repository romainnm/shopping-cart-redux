import { Link } from "react-router-dom";
// Connect component to redux
import { connect } from "react-redux";
// Icons
import { GiPieSlice } from "react-icons/gi";
import { RiShoppingCart2Fill } from "react-icons/ri";
// Components
import CheckoutSidebar from "./CheckoutSidebar";
// Actions
import { OPEN_CHECKOUT, CLOSE_CHECKOUT } from "../actions";

const Header = ({ cartAmount, closeCheckout, openCheckout }) => {
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

const mapStateToProps = (state) => {
  return { cartAmount: state.cartAmount };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openCheckout: () => dispatch({ type: OPEN_CHECKOUT }),
    closeCheckout: () => dispatch({ type: CLOSE_CHECKOUT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
