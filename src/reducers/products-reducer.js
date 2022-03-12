export const productsReducer = (state, { type, payload }) => {
  switch (type) {
    case "SORT":
      return { ...state, sortBy: payload };
    case "RATING":
      return { ...state, rating: payload };
    case "PRICE":
      return { ...state, price: payload };
    case "TOGGLE_CATEGORY":
      return {
        ...state,
        category: { ...state.category, [payload]: !state.category[payload] }
      };
    default:
      return state;
  }
};
