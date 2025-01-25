import React from 'react';
import Banner from '../path-to-banner-image.png';

const Home = () => {
  return (
    <div className="main-home">
      <h1>Добро пожаловать в HomeShop!</h1>
      <p>Мы предлагаем широкий ассортимент товаров для дома.</p>
     
       <img className='home-banner' src={Banner}/>
     
    </div>
  );
};

export default Home;