import { combineReducers } from '@reduxjs/toolkit'
// 引入切片
// import comASlice from '../components/ComA/store/comASlice'
import LoginViewSlice from '@/view/login/store/LoginViewSlice'

const rootReducer = combineReducers({
  // 使用切片
  LoginViewSliceAReducer: LoginViewSlice.reducer
})

export default rootReducer
