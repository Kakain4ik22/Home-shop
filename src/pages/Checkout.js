import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch({ type: 'products/REMOVE_FROM_CART', payload: id });
  };

  return (
    <div className='main-home'>
      <h1>Корзина</h1>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              {item.name} - {item.price}₽
              <button className="cart-button" onClick={() => removeFromCart(item.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
  
      {cartItems.length > 0 && (
        <Link to="/order" className="checkout-button">
          Оформить заказ
        </Link>
      )}
    </div>
  );  
};

export default Checkout;