let intialData = {
  electronic: [],
  jewelery: [],
  mens: [],
  womens: [],
};
const productsReducer = (state = intialData, action) => {
  switch (action.type) {
    case "electronic":
      state = {
        ...state,
        electronic: action.payload,
      };
      break;
    case "jewelery":
      state = {
        ...state,
        jewelery: action.payload,
      };
      break;
  }
  return state;
};
export default productsReducer;
