export const cartReducer = (initialState = [], action) => {
  console.log(initialState);
  switch (action.type) {
    case "ADD_TO_CART":
      return [...initialState, action.payload];

    case "REMOVE_FROM_CART":
      return initialState.filter((item) => item.name !== action.payload.name);

    case "CHANGE_QTY":
      return initialState.map((item) => {
        if (item.name === action.payload.name) {
          return {
            ...item,
            qty: Number(action.payload.qty),
          };
        } else {
          Number(item.qty);
        }

        return item;
      });

    default:
      return initialState;
  }
};
