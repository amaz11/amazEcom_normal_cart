export const cartAction = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const deleteCartItemActiocn = (item) => {
  return {
    type: "DELETE_CART_ITEM",
    payload: item,
  };
};

export const postItemAction = (item) => {
  return {
    type: "ADD_ITEM_TO_LIST",
    payload: item,
  };
};
