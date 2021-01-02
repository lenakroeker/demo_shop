const initialState = { admin: false };

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN": {
      return { ...state, admin: true };
    }
    case "LOG_OUT": {
      return { ...state, admin: false };
    }
    default:
      return state;
  }
};

export default adminReducer;
