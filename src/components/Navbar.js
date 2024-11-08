import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // CSS dosyasını dahil ediyoruz

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Emino Cheff</Link> {/* Logoya yönlendirme */}
      </div>
      <ul className="navbar-list">
        <li><Link to="/">Ana Sayfa</Link></li>
        <li><Link to="/foods">Yemekler</Link></li>
        <li><Link to="/drinks">İçecekler</Link></li>
        <li><Link to="/desserts">Tatlılar</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
