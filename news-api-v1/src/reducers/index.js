import { PAGE_SIZE } from "../constants";

const initialState = {};

const reducer = (state = initialState, action) => {
  const pageNum = action && action.payload && action.payload.resultCount && (Number(action.payload.resultCount) / PAGE_SIZE);
  switch (action.type) {
    case "RECEIVED_NEWS":
      return { ...state, newsResults: action.payload.newsResults, pageNumbers: (Number(action.payload.resultCount) / PAGE_SIZE) };
    
    default:
      return state;
  }
};
export default reducer;
