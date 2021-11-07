const initialState = {
  cartItem: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
      };

      case "DELETE_CART_ITEM":
        return{
          ...state,
          cartItem: state.cartItem.filter(item=>item.itemName !== action.payload.itemName)
        }

    default:
      return state;
  }
};
