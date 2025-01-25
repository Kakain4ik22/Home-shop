import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const { items: products } = useSelector((state) => state.products);

  return (
    <div className='main-home'>
      <h1>Наши товары</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
