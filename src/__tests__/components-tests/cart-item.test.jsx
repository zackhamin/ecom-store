import CartItem from "../../components/cart-item/cart-item";

import Todo from "../app/todo";
import React from "react";
import { mount } from "enzyme";

test("TodoComponent renders the text inside it", () => {
  const cartItem = {
    name: "test-item",
    quantity: 1,
    price: 4.99,
    imageUrl: "www.test-url.com",
  };
  const wrapper = mount(<CartItem cartItem={cartItem} />);
  const p = wrapper.find(".cart-item-container");
  expect(p.text()).toBe("test-item", 1, 4.99, "www.test-url.com");
});
