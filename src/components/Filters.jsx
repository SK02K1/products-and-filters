import { useProducts } from "../contexts/product-context";

export const Filters = () => {
  const {
    state: { sortBy, rating },
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
      <fieldset>
        <legend>Rating</legend>
        <label className="m-xs-tb" htmlFor="4 stars & above">
          <input
            onChange={() => dispatchProducts({ type: "RATING", payload: 4 })}
            checked={rating === 4}
            className="m-xs-lr"
            type="radio"
            name="rating"
            id="4 stars & above"
          />
          4 stars & above
        </label>
        <label className="m-xs-tb" htmlFor="3 stars & above">
          <input
            onChange={() => dispatchProducts({ type: "RATING", payload: 3 })}
            checked={rating === 3}
            className="m-xs-lr"
            type="radio"
            name="rating"
            id="3 stars & above"
          />
          3 stars & above
        </label>
        <label className="m-xs-tb" htmlFor="2 stars & above">
          <input
            onChange={() => dispatchProducts({ type: "RATING", payload: 2 })}
            checked={rating === 2}
            className="m-xs-lr"
            type="radio"
            name="rating"
            id="2 stars & above"
          />
          2 stars & above
        </label>
        <label className="m-xs-tb" htmlFor="1 star & above">
          <input
            onChange={() => dispatchProducts({ type: "RATING", payload: 1 })}
            checked={rating === 1}
            className="m-xs-lr"
            type="radio"
            name="rating"
            id="1 star & above"
          />
          1 star & above
        </label>
      </fieldset>
    </div>
  );
};
