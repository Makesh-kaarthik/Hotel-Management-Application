import React from "react";

function Payment({ total, handleCompletePayment }) {
  const bankacc = "Webrestaurant@okaxis";
  const resname = "Web Restaurant";
  const currency = "INR";

  const upiURL = `upi://pay?pa=${bankacc}&pn=${resname}&am=${total}&cu=${currency}`;

  const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    upiURL
  )}`;

  return (
    <div className="payment">
      <h2>Scan to Pay with GPay</h2>

      <div className="qr-code">
        <img src={qrCode} alt="QR Code" />
      </div>

      <p>Total Amount: Rs. {total}</p>

      <button onClick={handleCompletePayment}>Complete Payment</button>
    </div>
  );
}

export default Payment;