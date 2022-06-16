const initialState = {
  list: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
      };
    case "GET_TODO":
      return {
        ...state,
        list: action.payload,
      };
    case "UPDATE_TODO":
      return {
        ...state,
      };
    case "DELETE_TODO":
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default todoReducer;
