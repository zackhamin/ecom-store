import "./cart-dropdown.styles.scss";
import Button from "../button/button";
const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Checkout</Button>
    </div>
  );
};
export default CartDropDown;
