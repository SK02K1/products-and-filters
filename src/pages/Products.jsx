import { Filters } from "../components/Filters";
import { ProductCard } from "../components/ProductCard";
import { useProducts } from "../contexts/product-context";
import { items } from "../data/items";

export const Products = () => {
  const {
    state: { sortBy, rating, price, category }
  } = useProducts();

  const getSortedData = (data, sortBy) => {
    switch (sortBy) {
      case "LOW_TO_HIGH":
        return [...data].sort((a, b) => a.price - b.price);
      case "HIGH_TO_LOW":
        return [...data].sort((a, b) => b.price - a.price);
      default:
        return data;
    }
  };

  const getSelectedCategories = (category) =>
    Object.entries(category).reduce(
      (categories, [category, isSelected]) =>
        isSelected ? [...categories, category] : categories,
      []
    );

  const filterByRating = (data) => {
    return rating ? data.filter((itemInfo) => itemInfo.rating >= rating) : data;
  };

  const filterByPrice = (data) => {
    return data.filter((itemInfo) => itemInfo.price <= price);
  };

  const filterByCategory = (data) => {
    const selectedCategories = getSelectedCategories(category);
    return selectedCategories.length !== 0
      ? data.filter(({ type }) => selectedCategories.includes(type))
      : data;
  };

  const getFilteredData = (...fns) => (data) => {
    return fns.reduce((filteredData, func) => func(filteredData), data);
  };

  const sortedItems = getSortedData(items, sortBy);
  const filterData = getFilteredData(
    filterByRating,
    filterByPrice,
    filterByCategory
  );
  const filteredData = filterData(sortedItems);

  return (
    <div>
      <Filters />
      <h1 className="text-center text-xl m-xl-tb">Products</h1>
      <div className="grid-container auto m-xl-tb">
        {filteredData.map((itemInfo) => (
          <ProductCard key={itemInfo.id} itemInfo={itemInfo} />
        ))}
      </div>
    </div>
  );
};
