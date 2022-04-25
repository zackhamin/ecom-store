import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      {cartItems.map((item) => {
        const { name, quantity, id } = item;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span onClick={() => removeItemFromCart(item)}>decerement</span>
            <br />
            <span onClick={() => addItemToCart(item)}>increment</span>
          </div>
        );
      })}
    </div>
  );
};
export default Checkout;
