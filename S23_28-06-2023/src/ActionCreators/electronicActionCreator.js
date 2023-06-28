import { ELECTRONIC } from "../ActionTypes/productActionTypes";
const electronicActionCreator = (data) => {
  return {
    type: ELECTRONIC,
    payload: data,
  };
};

export default electronicActionCreator;
