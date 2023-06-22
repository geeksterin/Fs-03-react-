function counterReducer(state, action) {
  //state = {count:0}  action = {type:"",payload:<data>}

  if (action.type === "increasecount") {
    return (state = {
      ...state,
      count: state.count + action.payload,
    });
  } else if (action.type === "decreasecount") {
    return (state = {
      ...state,
      count: state.count - action.payload,
    });
  } else {
    return (state = {
      count: 0,
    });
  }
}

export default counterReducer;
