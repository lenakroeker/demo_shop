const initialState = {
  status: "idle",
  paymentPageView: false,
  confirmationPageView: false,
  cartItemTotal: 0,
  subtotal: 0,
};

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_DATA": {
      return { ...state, status: "loading" };
    }
    case "RECIEVED_DATA": {
      return { ...state, status: "idle" };
    }
    case "RECIEVED_DATA_ERROR": {
      return { ...state, status: "error" };
    }
    case "PAYMENT_PAGE_VISIBLE": {
      const newState = state;
      return { ...newState, paymentPageView: !state.paymentPageView };
    }

    case "CONFIRMATION_PAGE_VISIBLE": {
      const newState = state;
      return { ...newState, confirmationPageView: !state.confirmationPageView };
    }
    case "SET_CART_ITEMS_TOTAL": {
      const newState = state;
      return { ...newState, cartItemTotal: action.total };
    }
    case "SET_SUBTOTAL": {
      const newState = state;
      return { ...newState, sutotal: action.total };
    }
    default:
      return state;
  }
};

export default statusReducer;
