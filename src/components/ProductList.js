import { connect } from "react-redux";
import Product from "./Product";
import CheckoutSidebar from "./CheckoutSidebar";

const ProductList = ({ products }) => {

  return (
    <section className="shop-container">
      <h2>Our delicious pies!</h2>
      <div className="product-container">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      {/* Checkout sidebar is hidden with CSS */}
      <CheckoutSidebar />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(ProductList);
