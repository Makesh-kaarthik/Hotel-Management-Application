import React from "react";

function Bill({ selectedItems, total, setShowBill, setShowPayment }) {
  return (
    <div className="bill">
      <h2>Your Bill</h2>

      {selectedItems.map((item) => (
        <div key={item.id} className="bill-item">
          <span>
            {item.name} x {item.quantity}
          </span>

          <span>Rs. {(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}

      <div className="total">
        <strong>Total: Rs. {total}</strong>
      </div>

      <button onClick={() => setShowBill(false)}>Back to Menu</button>

      <button onClick={() => setShowPayment(true)}>
        Proceed to Payment
      </button>
    </div>
  );
}

export default Bill;