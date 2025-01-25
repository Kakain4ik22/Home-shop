import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/productsSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Добавить в корзину</button>
    </div>
  );
};

export default ProductCard;