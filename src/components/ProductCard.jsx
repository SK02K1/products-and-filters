export const ProductCard = ({ itemInfo: { name, price, img, rating } }) => {
  return (
    <div class="card">
      <span class="material-icons-outlined card-icon-like">
        favorite_border
      </span>
      <div class="card-header m-xs-tb">
        <img class="card-img m-xs-tb" src={img} alt={name} />
      </div>
      <div class="card-body m-xs-tb">
        <h2 class="item-price m-xs-tb">${price} USD</h2>
        <h3 class="card-title m-xs-tb">{name}</h3>
        <h4 className="text-sm">{rating}/5</h4>
      </div>
      <div class="card-footer m-xs-tb">
        <button class="btn btn-secondary card-btn" href="#">
          Add to cart
        </button>
      </div>
    </div>
  );
};
