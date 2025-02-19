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
        <div className="order-container">
        <div className="order-form">
          <h2>Оплата</h2>
  
          <label>Номер карты</label>
          <input
            className='card-number'
            type="text"
            name='cardNumber'
            placeholder="#### #### #### ####"
            maxLength="16"
            value={formData.cardNumber}
            onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
          />
  
          <label>Card Holder</label>
          <input
            className='card-holder'
            type="text"
            name="cardHolder"
            placeholder="Full Name"
            value={formData.cardHolder}
           // onChange={handleChange}
          />
  
          <div className="row">
            <div className="column">
              <label>Expiration Date</label>
              <div className="expiration">
                <select
                  name="expiryMonth"
                  value={formData.expiryMonth}
                  className='select-month'
                >
                  <option value="">Month</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}
                    </option>
                  ))}
                </select>
                <select
                  name="expiryYear"
                  value={formData.expiryYear}
               //   onChange={handleChange}
                  className='select-year'
                >
                  <option value="">Year</option>
                  {[...Array(30)].map((_, i) => (
                    <option key={i} value={2025 - i}>
                      {2025 - i}
                    </option>
                  ))}
                </select>
              </div>
            </div>
  
            <div className="column">
              <label className='CVC'>CVC</label>
              <input
                className='cvc-input'
                type="text"
                name="cvc"
                placeholder="XXX"
                maxLength="3"
                value={formData.cvc}
               // onChange={handleChange}
              />
            </div>
          </div>
  
          <div className="button-container">
            <button onClick={prevStep} className="previous-button">Назад</button>
            <button onClick={nextStep} className="next-button">Далее</button>
          </div> 
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
