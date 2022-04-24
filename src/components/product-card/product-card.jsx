import "./product-card.scss";
import Button from "../button/button";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ products }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = products;

  const addProductToCart = () => addItemToCart(products);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};
export default ProductCard;
