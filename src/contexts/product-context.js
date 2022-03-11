import { createContext, useContext, useReducer } from "react";

const ProductContext = createContext(null);

const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "SORT":
      return { ...state, sortBy: payload };
    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    sortBy: null
  });

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductsProvider, useProducts };
