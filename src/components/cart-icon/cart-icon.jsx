import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { IsCartOpen, setIsCartOpen } = useContext(CartContext);
  const handleClick = () => {
    setIsCartOpen(!IsCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
export default CartIcon;
