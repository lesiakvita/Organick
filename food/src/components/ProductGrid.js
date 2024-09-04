import React, { useState } from "react";
import ProductCard from "./ProductCard";

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

export default function ProductGrid() {
  const [products, setProducts] = useState(initialProducts);
  const [showMore, setShowMore] = useState(false);

  const handleLoadMore = () => {
    setProducts([...products, ...additionalProducts]);
    setShowMore(true);
  };

  return (
    <section className="product-section">
      <h3 className="product-section__subtitle">Categories</h3>
      <h1 className="product-section__title">Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
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
