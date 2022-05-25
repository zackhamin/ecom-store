import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

import handleClick from "../../components/cart-icon/cart-icon";

test("Handle click returns flase when passed a true value", () => {
  expect(handleClick(true)).toEqual(false);
});

test("Handle click returns true when passed a false value", () => {
  expect(handleClick(false)).toEqual(true);
});
