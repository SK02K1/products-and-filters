export const productsReducer = (state, { type, payload }) => {
  switch (type) {
    case "SORT":
      return { ...state, sortBy: payload };
    case "RATING":
      return { ...state, rating: payload };
    default:
      return state;
  }
};
