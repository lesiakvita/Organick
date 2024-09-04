import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialProducts = [
  {
    id: 1,
    category: "Vegetable",
    name: "Calabrese Broccoli",
    price: 13.0,
    oldPrice: 20.0,
    rating: 5,
    image: require("../img/shop/broccoli.png"),
  },
  {
    id: 2,
    category: "Fresh",
    name: "Fresh Banana Fruites",
    price: 14.0,
    oldPrice: 20.0,
    rating: 4.5,
    image: require("../img/shop/banana.png"),
  },
  {
    id: 3,
    category: "Nuts",
    name: "White Nuts",
    price: 15.0,
    oldPrice: 20.0,
    rating: 4,
    image: require("../img/shop/pistashio.png"),
  },
  {
    id: 4,
    category: "Vegetable",
    name: "Vegan Red Tomato",
    price: 17.0,
    oldPrice: 20.0,
    rating: 5,
    image: require("../img/shop/tomato.png"),
  },
  {
    id: 5,
    category: "Health",
    name: "Mung Bean",
    price: 11.0,
    oldPrice: 20.0,
    rating: 5,
    image: require("../img/shop/beans.png"),
  },
  {
    id: 6,
    category: "Nuts",
    name: "Brown Hazelnut",
    price: 12.0,
    oldPrice: 20.0,
    rating: 4.5,
    image: require("../img/shop/hazelnut.png"),
  },
  {
    id: 7,
    category: "Fresh",
    name: "Eggs",
    price: 17.0,
    oldPrice: 20.0,
    rating: 5,
    image: require("../img/shop/eggs.png"),
  },
  {
    id: 8,
    category: "Fresh",
    name: "Zelco Suji Elaichi Rusk",
    price: 15.0,
    oldPrice: 20.0,
    rating: 4,
    image: require("../img/shop/zelco.png"),
  },
];

const additionalProducts = [
  {
    id: 9,
    category: "Vegetable",
    name: "Zukini",
    price: 15.0,
    oldPrice: 20.0,
    rating: 5,
    image: require("../img/shop/zukini.png"),
  },
  {
    id: 10,
    category: "Nuts",
    name: "Cashew Nuts",
    price: 12.0,
    oldPrice: 20.0,
    rating: 4,
    image: require("../img/shop/cashew.png"),
  },
  {
    id: 11,
    category: "Vegetable",
    name: "Fresh Corn",
    price: 17.0,
    oldPrice: 20.0,
    rating: 4,
    image: require("../img/shop/corn.png"),
  },
  {
    id: 12,
    category: "Nuts",
    name: "Organic Almonds",
    price: 15.0,
    oldPrice: 20.0,
    rating: 4,
    image: require("../img/shop/almonds.png"),
  },
];

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
            to={`/product/${product.id}`} // Переход на страницу товара
            key={product.id}
            className="product-card-link"
          >
            <div key={product.id} className="product-card">
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
                {/* <div>+</div> */}
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
