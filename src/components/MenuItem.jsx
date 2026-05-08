import React from "react";

function MenuItem({ item, handleQuantityChange }) {
  return (
    <div className="menu-item">
      <div className="item-details">
        <span>{item.name}</span> - <span>Rs. {item.price}</span>
      </div>

      <div className="quantity-controls">
        <button onClick={() => handleQuantityChange(item.id, -1)}>
          -
        </button>

        <span>{item.quantity}</span>

        <button onClick={() => handleQuantityChange(item.id, 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default MenuItem;