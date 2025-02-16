const initialState = {
  items: [
    { id: 1, name: 'Утюг Brayer BR4006 2400Вт керамическое покрытие', price: 3299, image: 'https://img.megastroycdn.ru/P1GrXVabZ_o/rsin:364:364/products/1bf0b050143ae99527643c89cc9b18352114f9a4ecd6657056b960a7a4fb0228/438637_1_ecac48ab77a96ed39f710dffb3c0b003.jpg' },
    { id: 2, name: 'Фен для волос Brayer BR3040 1400Вт 2 скорости складная ручка', price: 1299, image: 'https://img.megastroycdn.ru/dk8MXceQYqY/rsin:364:364/products/dbeb58c614796d4532f1a4bca726fb1aad577d049a8c430d4914c7668cca08f1/424063_1_90f48a484cd3aeddc9559bafc5b168d5.jpg' },
    { id: 3, name: 'Пылесос для мягкой мебели Energy EN-642 400Вт 0,2л с УФ-лампой', price: 3199, image: 'https://img.megastroycdn.ru/ZF6QnHs6kMs/products/b2337505d8bf4965e72e41972295c98a2019d565a10eeb1a6fd2b08e38b27ecd/460444_1.jpg' },
    { id: 4, name: 'Весы напольные RED SOLUTION SKY RS-762S', price: 1699, image: 'https://img.megastroycdn.ru/1LU5Dbte85I/rsin:364:364/products/394aa1a090f501f1ec5319a4aff37d29d344d354efeaa6f411240f5d2fed78fe/457746_1.jpg' },
  ], 
  cart: [],
  loading: false,
  error: null,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'products/ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };

    case 'products/REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case 'products/CLEAR_CART': // Новый экшен
      return {
        ...state,
        cart: []
      };

    default:
      return state;
  }
}
