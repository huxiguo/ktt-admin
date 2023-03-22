import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login } from '@/api/auth'
import { UserLoginType } from '@/type/login'
export const userLoginAsync = createAsyncThunk(
  'login',
  async (userData: UserLoginType) => {
    console.log('userData', userData)
    const res = await login(userData)
    console.log('res', res)
  }
)
const LoginViewSlice = createSlice({
  name: 'LoginView',
  initialState: {
    token: '',
    userInfo: {}
  },
  reducers: {}
})
export default LoginViewSlice
