import { createContext, useContext, useReducer } from "react";
import { productsReducer } from "../reducers/products-reducer";

const ProductContext = createContext(null);

const defaultState = {
  sortBy: null,
  rating: null,
  price: 6000,
  category: {
    drone: false,
    camera: false,
    lens: false,
    gimbal: false
  }
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, defaultState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductsProvider, useProducts };
