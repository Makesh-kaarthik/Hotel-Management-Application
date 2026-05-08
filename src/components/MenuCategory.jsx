import React from "react";
import MenuItem from "./MenuItem";

function MenuCategory({ category, items, handleQuantityChange }) {
  return (
    <div className="category">
      <h3>{category.toUpperCase()}</h3>

      {items.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          handleQuantityChange={handleQuantityChange}
        />
      ))}
    </div>
  );
}

export default MenuCategory;