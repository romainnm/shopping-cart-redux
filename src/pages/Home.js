import { Link } from "react-router-dom";
// Icons
import { AiFillHeart } from "react-icons/ai";

const Home = () => {
  return (
    <section className="container-center home-container">
      <h2>Our Winter selection is here!</h2>
      <img
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-holiday-pie-board-1637082047.jpg?crop=0.820xw:0.804xh;0.105xw,0.0891xh&resize=980:*"
        alt="winter pies"
      />
      <Link to="/shopping-cart-redux/shop" className="btn shop-btn">
        Shop Now <AiFillHeart className="shop-btn-icon" />
      </Link>
    </section>
  );
};

export default Home;
