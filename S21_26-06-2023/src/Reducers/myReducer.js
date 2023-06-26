const initialData = {
  comp1: "",
  comp2: "",
};

const myReducer = (state = initialData, action) => {
  switch (
    action.type //comp1
  ) {
    case "comp1":
      state = {
        ...state,
        comp1: action.payload,
      };
      break;
  }

  return state;
};

export default myReducer;
