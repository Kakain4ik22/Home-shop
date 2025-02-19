import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const { items: products } = useSelector((state) => state.products);
  const [sortOption, setSortOption] = useState(''); // Состояние сортировки
  const [filterPrice, setFilterPrice] = useState(null); // Фильтр по цене

  // Функция сортировки товаров
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'price') return a.price - b.price;
    if (sortOption === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  // Фильтрация по цене
  const filteredProducts = filterPrice
    ? sortedProducts.filter((product) => product.price <= filterPrice)
    : sortedProducts;

    return (
      <div className='main-home'>
        <h1>Наши товары</h1>
    
        {/* Выпадающий список для сортировки */}
        <select className="sort-select" onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Сортировка</option>
          <option value="price">По цене</option>
          <option value="name">По названию</option>
        </select>
    
        {/* Кнопки для фильтрации */}
        <div className="filter-buttons-container">
          <button className="filter-button" onClick={() => setFilterPrice(2000)}>До 2000₽</button>
          <button className="filter-button" onClick={() => setFilterPrice(null)}>Сбросить фильтр</button>
        </div>

        {/* Карточки товаров */}
        <div className="products-container">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
};

export default Products;
