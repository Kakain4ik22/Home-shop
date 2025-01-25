// productsSlice.js
const initialState = {
  items: [
    { id: 1, name: 'Товар 1', price: 100, image: 'url1.jpg' },
    { id: 2, name: 'Товар 2', price: 200, image: 'url2.jpg' },
    { id: 3, name: 'Товар 3', price: 300, image: 'url3.jpg' },
  ], 
  cart: [],
  loading: false,
  error: null,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'products/ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
}
