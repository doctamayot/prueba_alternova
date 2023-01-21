import { useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("cartItems")) || [];
};

export const useCart = () => {
  const [cartItems, dispatch] = useReducer(cartReducer, [], init);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleNewCartItem = (item) => {
    const action = {
      type: "ADD_TO_CART",
      payload: item,
    };
    dispatch(action);
  };

  const deleteCartItem = (item) => {
    const action = {
      type: "REMOVE_FROM_CART",
      payload: item,
    };
    dispatch(action);
  };

  const qtyItem = (name, qty) => {
    const action = {
      type: "CHANGE_QTY",
      payload: {
        name: name,
        qty: qty,
      },
    };

    dispatch(action);
  };
  return {
    cartItems,
    handleNewCartItem,
    qtyItem,
    deleteCartItem,
  };
};
