import React from "react";

export default function LoadMoreButton({ onClick }) {
  return (
    <button className="load-button" onClick={onClick}>
      Load More
    </button>
  );
}
