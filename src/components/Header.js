import React from 'react';
import { Link } from 'react-router-dom';
import logo from './path-to-logo.svg';


const Header = () => {
  return (
    <header>
      <div className='HeaderLogo'>
      <img src={logo} alt="Logo" className="logo" />
      <h1>HomeShop</h1>
      </div>
      <nav>
        <Link to="/" className="button">Главная</Link>
        <Link to="/products" className="button">Товары</Link>
        <Link to="/about" className="button">О нас</Link>
        <Link to="/contact" className="button">Контакты</Link>
        <Link to="/checkout" className="button">Корзина</Link>
      </nav>
    </header>
  );
};

export default Header;