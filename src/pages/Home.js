import React from 'react';
import './Home.css'; // Stil dosyası için import

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Hoş Geldiniz!</h1>
        <p className="home-description">Lezzetli yemekler, içecekler ve tatlılar ile dolu bir deneyime hazır olun.</p>
        <p className="home-subtitle">Menümüzü keşfedin!</p>
      </div>
    </div>
  );
};

export default Home;
