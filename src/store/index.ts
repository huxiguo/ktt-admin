import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducer';

// 这里使用configureStore代替之前的createStore 
const store = configureStore({
  reducer: rootReducer
})

export default store;