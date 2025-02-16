import React from 'react';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({ type: 'products/ADD_TO_CART', payload: product });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Цена: {product.price}₽</p>
      <button onClick={addToCart}>Добавить в корзину</button>
    </div>
  );
};

export default ProductCard;
