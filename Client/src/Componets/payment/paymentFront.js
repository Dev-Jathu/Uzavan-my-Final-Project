


import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

function PaymentFront() {
  const [product, setProduct] = useState({
    name: "Uzhavan",  // Changed to lowercase 'name'
    price: 10,
    productBy: "uki",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch("http://localhost:3003/payment", {  // Ensure the backend server is running on this port
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("Response:", response);
        const { status } = response;
        console.log("Status:", status);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <StripeCheckout
        stripeKey="pk_test_51PILqiEp6JPeXInZx8QfmFl1DToJ5gg5bAXgIH6JMHKpkPeS7RaxnWq3rGGzLdyz35RtgFaO1XlOsTsJtPAC91Oc00KBUr8fEI"  // Use camelCase for props
        token={makePayment}
        name="Buy Uzhavan"  // Updated prop to lowercase 'name'
        amount={product.price * 100}
      />
    </div>
  );
}

export default PaymentFront;

