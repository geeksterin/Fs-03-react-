var initialData = {
  comp1: "",
  comp2: "",
};

const myReducer = (state = initialData, action) => {
  switch (
    action.type //comp2
  ) {
    case "comp1":
      state = {
        ...state,
        comp1: action.info,
      };
      break;
    case "comp2":
      state = {
        ...state,
        comp2: action.payload,
      };
      break;
  }

  return state;
};

export default myReducer;
