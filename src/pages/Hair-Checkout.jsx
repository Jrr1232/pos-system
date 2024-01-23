import React, { useState } from 'react';

function HairCheckout() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [cart, setCart] = useState([]);

  const services = [
    {
       name: 'Color/Highlights',
       price: 5,
       code: 1
    },
    {
       name: 'Blow dry with Hair Styling',
       price: 120,
       code: 2
    },
    {
       name: 'Blow dry',
       price: 5,
       code: 3
    },
    {
      name: 'Hair Styling',
      price: 5,
      code: 4
    },
    {
      name: 'Wash',
      price: 5,
      code: 5
    },
    ];

  const addServiceToCart = (service) => {
    setCart([...cart, service]);
  };

  const removeServiceFromCart = (service) => {
    const updatedCart = cart.filter(item => item !== service);
    setCart(updatedCart);
  };

  const handleCheckout = async () => {
    const response = await fetch("http://localhost:3001/api/checkout", {
      method: "POST",
      body: JSON.stringify(cart),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      alert("Successfully added to Checkout");
      setCart([]);
    } else {
      alert("Failed to add to checkout");
    }
  };

  return (
    <> <a href="/">
   <p id ="home-button"> Home </p>
  </a>
    <p id="services-title">Hair Services</p>
      <ul id="services-list">
        {services.map(service => (
          <li key={service.name}>
            <label>
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    addServiceToCart(service);
                  } else {
                    removeServiceFromCart(service);
                  }
                }}
              />
              {service.name}
            </label>
          </li>
        ))}
      </ul>
      <button id="checkout-button" onClick={handleCheckout}>Checkout</button>
    </>
  );
}

export default HairCheckout;
