import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
// 进度条
import Nprogress from 'nprogress'
import { message } from 'antd'
Nprogress.settings.showSpinner = false
const service = axios.create({
  baseURL: 'http://dida100.com:8888/',
  timeout: 5000
})
service.interceptors.request.use((config): InternalAxiosRequestConfig => {
  let token = sessionStorage.getItem('token')
  Nprogress.start()
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token
  }
  return config
})
service.interceptors.response.use(
  (res: AxiosResponse) => {
    Nprogress.done()
    if (res.status !== 200) {
      switch (res.status) {
        case 401:
          message.info('没有权限')
          break
        case 500:
          message.info('服务器错误')
          break
        case 505:
          message.info('服务器错误')
          break
        case 404:
          message.info('找不到页面')
          break
        default:
          message.info('请求失败')
          break
      }
    }
    return res.data
  },
  (err) => {
    Nprogress.done()
    message.info('请求失败')
    return err
  }
)
export default service
