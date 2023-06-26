const productReducer = (state, action) => {
  switch (action.type) {
    case "electronicProducts":
      state = {
        ...state,
        electronicProducts: action.payload,
      };
      break;
    case "jeweleryProducts":
      state = {
        ...state,
        jeweleryProducts: action.payload,
      };
      break;
  }

  return state;
};

export default productReducer;
