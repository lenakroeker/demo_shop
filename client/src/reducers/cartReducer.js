const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const id = action.item.id;
      const quantity = action.item.quantity;
      return { ...state, [id]: { ...action.item, quantity: +quantity } };
    }
    case "REMOVE_ITEM": {
      let stateCopy = state;
      const id = action.item.id;
      delete stateCopy[id];
      return { ...stateCopy };
    }

    case "INCREMENT_ITEM": {
      const id = action.item.id;
      const newQuantity = action.item[id].quantity + 1;
      return { ...state, [id]: { ...action.item[id], quantity: newQuantity } };
    }
    case "DECREMENT_ITEM": {
      const id = action.item.id;
      const newQuantity = action.item[id].quantity - 1;
      return { ...state, [id]: { ...action.item[id], quantity: newQuantity } };
    }
    case "UPDATE_QUANTITY": {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: action.item.quantity,
        },
      };
    }
    case "CLEAR_CART": {
      return {};
    }
    default:
      return state;
  }
};

export default cartReducer;
