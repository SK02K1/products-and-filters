import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ProductsProvider } from "./contexts/product-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </StrictMode>,
  rootElement
);
