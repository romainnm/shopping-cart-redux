import { useGlobalContext } from "../context";
//Icons
import { FaPlus, FaMinus } from "react-icons/fa";

const Product = ({ product }) => {
  const { id, name, price, amount, img } = product;
  const { toggleAmount, addToCart } = useGlobalContext();

  return (
    <article className="product-card">
      <div className="images-container">
        <img src={img} alt="pie" />
        <div className="product-card__infos">
          <div className="product-card__infos-header">
            <h4 className="product-card__infos-name">{name}</h4>
            <div className="product-quantity">
              <button
                type="submit"
                onClick={() => toggleAmount(id, "decrease")}
              >
                <FaMinus />
              </button>
              <p>{amount}</p>
              <button
                type="submit"
                onClick={() => toggleAmount(id, "increase")}
              >
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="product-cart__infos-footer">
            <p className="product-card__infos-price">
              <span className="dollar">$</span>
              {price}
            </p>
            <button
              className="btn"
              onClick={(e) => addToCart(product, e.target)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Product;
