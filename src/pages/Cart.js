// src/pages/Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout'); // Ödeme sayfasına yönlendirme
  };

  return (
    <div className="cart-container">
      <h1>Sepetiniz</h1>
      {cartItems.length === 0 ? (
        <p>Sepetinizde ürün yok.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <h2>{item.name}</h2>
              <p>Fiyat: {item.price} TL</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleCheckout}>Ödeme Ekranına Geç</button>
    </div>
  );
};

export default Cart;
