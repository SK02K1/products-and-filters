import { useProducts } from "../contexts/product-context";

export const Filters = () => {
  const {
    state: { sortBy, rating, price, category },
    dispatch: dispatchProducts
  } = useProducts();
  return (
    <div className="filters-container">
      <button
        onClick={() => dispatchProducts({ type: "CLEAR_FILTERS" })}
        className="btn btn-secondary"
      >
        CLEAR
      </button>
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
      <fieldset>
        <legend>Price</legend>
        <label className="m-xs-tblr" htmlFor="price">
          under {price}
          <input
            className="m-xs-lr"
            onChange={(e) =>
              dispatchProducts({ type: "PRICE", payload: e.target.value })
            }
            type="range"
            name="range"
            min={90}
            max={6000}
            id="range"
            value={price}
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Category</legend>
        <label className="m-xs-tblr" htmlFor="drone">
          <input
            onChange={() =>
              dispatchProducts({ type: "TOGGLE_CATEGORY", payload: "drone" })
            }
            className="m-xs-lr"
            type="checkbox"
            name="category"
            id="drone"
            checked={category.drone}
          />
          drone
        </label>
        <label className="m-xs-tblr" htmlFor="camera">
          <input
            onChange={() =>
              dispatchProducts({ type: "TOGGLE_CATEGORY", payload: "camera" })
            }
            className="m-xs-lr"
            type="checkbox"
            name="category"
            id="camera"
            checked={category.camera}
          />
          camera
        </label>
        <label className="m-xs-tblr" htmlFor="gimbal">
          <input
            onChange={() =>
              dispatchProducts({ type: "TOGGLE_CATEGORY", payload: "gimbal" })
            }
            className="m-xs-lr"
            type="checkbox"
            name="category"
            id="gimbal"
            checked={category.gimbal}
          />
          gimbal
        </label>
        <label className="m-xs-tblr" htmlFor="lens">
          <input
            onChange={() =>
              dispatchProducts({ type: "TOGGLE_CATEGORY", payload: "lens" })
            }
            className="m-xs-lr"
            type="checkbox"
            name="category"
            id="lens"
            checked={category.lens}
          />
          lens
        </label>
      </fieldset>
    </div>
  );
};
