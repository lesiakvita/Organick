export default function ProductSection() {
  const [products, setProducts] = useState(initialProducts);
  const [showMore, setShowMore] = useState(false);

  const handleLoadMore = () => {
    setProducts([...products, ...additionalProducts]);
    setShowMore(true);
  };

  return (
    <section className="product-section" id="shop">
      <h3 className="product-section__subtitle">Categories</h3>
      <h1 className="product-section__title">Our Products</h1>
      <div className="product-section__grid">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="product-card-link"
          >
            <div className="product-card">
              <div className="product-card__category">{product.category}</div>
              <img
                src={product.image}
                alt={product.name}
                className="product-card__image"
              />
              <div className="product-card__container">
                <h4 className="product-card__name">{product.name}</h4>
                <div className="product-card__price">
                  <span className="product-card__old-price">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                  <span className="product-card__new-price">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <div className="product-card__rating">
                  {"★".repeat(Math.round(product.rating))}{" "}
                  {"☆".repeat(5 - Math.round(product.rating))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {!showMore && (
        <button className="product-section__button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </section>
  );
}
