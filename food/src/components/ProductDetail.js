import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail({ items }) {
  const { id } = useParams();
  const product = items.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: "300px" }} />
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Old Price: ${product.oldPrice.toFixed(2)}</p>
      <p>Category: {product.category}</p>
      <p>
        Rating: {"★".repeat(Math.round(product.rating))}{" "}
        {"☆".repeat(5 - Math.round(product.rating))}
      </p>
      <button onClick={() => console.log("Add to cart")}>Add to Cart</button>
    </div>
  );
}
