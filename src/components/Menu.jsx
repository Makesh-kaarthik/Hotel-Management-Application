import React from "react";
import MenuCategory from "./MenuCategory";
import Footer from "./Footer";

function Menu({
  menuItems,
  handleQuantityChange,
  selectedItems,
  setShowBill,
  handleLogout,
}) {
  const categories = ["Main Course", "Appetizers", "Beverages"];

  return (
    <div className="menu">
      <h1>FOOD MENU</h1>
      <h2>Web Restaurant</h2>

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>

      {categories.map((category) => (
        <MenuCategory
          key={category}
          category={category}
          items={menuItems.filter((item) => item.category === category)}
          handleQuantityChange={handleQuantityChange}
        />
      ))}

      <button
        className="generate-bill"
        onClick={() => setShowBill(true)}
        disabled={selectedItems.length === 0}
      >
        Generate Bill
      </button>

      <Footer />
    </div>
  );
}

export default Menu;