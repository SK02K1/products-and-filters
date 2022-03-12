import { createContext, useContext, useReducer } from "react";
import { defaultFilterState } from "../data/default-filter-state";
import { productsReducer } from "../reducers/products-reducer";

const ProductContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, defaultFilterState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductsProvider, useProducts };
