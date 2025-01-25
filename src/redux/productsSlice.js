// redux/productsSlice.js
import axios from 'axios';

// Начальное состояние
const initialState = {
  items: [], // Список товаров
  cart: [],  // Корзина
  loading: false, // Состояние загрузки
  error: null, // Ошибки
};

// Action types
const SET_PRODUCTS = 'products/SET_PRODUCTS';
const ADD_TO_CART = 'products/ADD_TO_CART';
const FETCH_PRODUCTS_START = 'products/FETCH_PRODUCTS_START';
const FETCH_PRODUCTS_SUCCESS = 'products/FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_FAILURE = 'products/FETCH_PRODUCTS_FAILURE';

// Reducer
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return { ...state, loading: true, error: null };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
}

// Action creators
export const fetchProductsStart = () => ({
  type: FETCH_PRODUCTS_START,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// Асинхронный action для загрузки товаров через axios
export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const response = await axios.get('/api/products'); // Укажите реальный URL API
    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
