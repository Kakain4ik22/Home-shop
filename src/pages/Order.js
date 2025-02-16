import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    address: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleOrder = () => {
    alert('Заказ оформлен!');
    dispatch({ type: 'products/CLEAR_CART' }); // Очищаем корзину
    navigate('/'); // Перенаправляем на главную
  };

  return (
    <div className="main-home">
      <h1>Оформление заказа</h1>

      {step === 1 && (
        <div>
          <h2>Шаг 1: Информация о покупателе</h2>
          <input
            type="text"
            placeholder="Имя"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <button onClick={nextStep} className="next-button">Далее</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Шаг 2: Оплата</h2>
          <input
            type="text"
            placeholder="Номер карты"
            value={formData.cardNumber}
            onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
          />
          <div className="button-container">
            <button onClick={prevStep} className="previous-button">Назад</button>
            <button onClick={nextStep} className="next-button">Далее</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Шаг 3: Адрес</h2>
          <input
            type="text"
            placeholder="Адрес доставки"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />

          <div className="button-container">
            <button onClick={prevStep} className="previous-button">Назад</button>
            <button onClick={handleOrder} className="next-button">Оформить</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
