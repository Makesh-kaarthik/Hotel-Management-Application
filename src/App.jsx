import React, { useState } from "react";
import "./styles/App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu";
import Bill from "./components/Bill";
import Payment from "./components/Payment";
import ThankYou from "./components/ThankYou";

import initialMenu from "./data/menuData";
import { calculateTotal } from "./utils/paymentUtils";

function App() {
  const [menuItems, setMenuItems] = useState(initialMenu);
  const [showBill, setShowBill] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  const onLogin = async (username, password) => {
    try {
      const response = await fetch(
        "http://localhost:3001/users"
      );

      const users = await response.json();

      const foundUser = users.find(
        (user) =>
          user.username === username &&
          user.password === password
      );

      if (foundUser) {
        setIsLoggedIn(true);
        setLoginError("");
      } else {
        setLoginError(
          "Invalid username or password"
        );
      }
    } catch (error) {
      setLoginError("Server Error");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMenuItems(initialMenu);
    setLoginError("");
  };

  const handleQuantityChange = (id, change) => {
    setMenuItems(
      menuItems.map((item) =>
        item.id === id
          ? {
            ...item,
            quantity: Math.max(0, item.quantity + change),
          }
          : item
      )
    );
  };

  const selectedItems = menuItems.filter(
    (item) => item.quantity > 0
  );

  const total = calculateTotal(menuItems);

  const handleCompletePayment = () => {
    setPaymentCompleted(true);

    setTimeout(() => {
      setShowPayment(false);
      setShowBill(false);
      setMenuItems(initialMenu);
      setPaymentCompleted(false);
    }, 5000);
  };

  if (!isLoggedIn) {
    return showRegister ? (
      <Register
        goToLogin={() => setShowRegister(false)}
      />
    ) : (
      <>
        <Login
          onLogin={onLogin}
          loginError={loginError}
          goToRegister={() => setShowRegister(true)}
        />
      </>
    );
  }

  return (
    <div className="App">
      {!showBill && !showPayment && (
        <Menu
          menuItems={menuItems}
          handleQuantityChange={handleQuantityChange}
          selectedItems={selectedItems}
          setShowBill={setShowBill}
          handleLogout={handleLogout}
        />
      )}

      {showBill && !showPayment && (
        <Bill
          selectedItems={selectedItems}
          total={total}
          setShowBill={setShowBill}
          setShowPayment={setShowPayment}
        />
      )}

      {showPayment && !paymentCompleted && (
        <Payment
          total={total}
          handleCompletePayment={handleCompletePayment}
        />
      )}

      {showPayment && paymentCompleted && (
        <ThankYou
          total={total}
          goToMenu={() => {
            setShowPayment(false);
            setShowBill(false);
            setPaymentCompleted(false);
            setMenuItems(initialMenu);
          }}
        />
      )}
    </div>
  );
}

export default App;