import React from "react";
import "./CheckoutMainLeft.style.scss";

const CheckoutMainLeft = ({ amount }) => {
  return (
    <div className="checkout-container-left">
      <h2>Billing Details</h2>
      <form>
        <div className="inside">
          <div className=" checkout-input name">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter your full name" />
          </div>
          <div className=" checkout-input email">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <button type="submit">Pay {`${amount}`}</button>
      </form>
    </div>
  );
};

export default CheckoutMainLeft;
