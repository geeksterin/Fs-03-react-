const productReducer = (state, action) => {
  switch (action.type) {
    case "products":
      state = {
        products: action.payload,
      };
  }

  return state;
};

export default productReducer;
