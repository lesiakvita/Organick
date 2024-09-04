import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card__category">{product.category}</div>
      <img
        src={product.image}
        alt={product.name}
        className="product-card__image"
      />
      <div className="product-card__info">
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
  );
}
