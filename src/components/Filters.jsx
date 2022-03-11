import { useProducts } from "../contexts/product-context";

export const Filters = () => {
  const {
    state: { sortBy },
    dispatch: dispatchProducts
  } = useProducts();
  return (
    <div className="filters-container">
      <fieldset>
        <legend>Sort by</legend>
        <label className="m-xs-tb" htmlFor="low-to-high">
          <input
            onChange={() =>
              dispatchProducts({ type: "SORT", payload: "LOW_TO_HIGH" })
            }
            checked={sortBy === "LOW_TO_HIGH"}
            className="m-xs-lr"
            type="radio"
            name="sort-by"
            id="low-to-high"
          />
          Price - Low to High
        </label>
        <label className="m-xs-tb" htmlFor="high-to-low">
          <input
            onChange={() =>
              dispatchProducts({ type: "SORT", payload: "HIGH_TO_LOW" })
            }
            value={sortBy === "HIGH_TO_LOW"}
            className="m-xs-lr"
            type="radio"
            name="sort-by"
            id="high-to-low"
          />
          Price - High to Low
        </label>
      </fieldset>
    </div>
  );
};
