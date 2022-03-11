import { ProductCard } from "../components/ProductCard";
import { items } from "../data/items";

export const Products = () => {
  return (
    <div>
      <h1 className="text-center text-xl m-xl-tb">Products</h1>
      <div className="grid-container auto m-xl-tb">
        {items.map((itemInfo) => (
          <ProductCard key={itemInfo.id} itemInfo={itemInfo} />
        ))}
      </div>
    </div>
  );
};
