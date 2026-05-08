import React from "react";

function ThankYou({ total, goToMenu }) {
  return (
    <div className="thank-you">
      <h2>Thank You!</h2>

      <p>Your payment of Rs. {total} has been received.</p>

      <p>We appreciate your visit to Web Restaurant!</p>

      <button onClick={goToMenu}>
        Back to Menu
      </button>
    </div>
  );
}

export default ThankYou;