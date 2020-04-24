
const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVED_NEWS":
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
};
export default reducer;
