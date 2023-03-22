import service from '.'
import { UserLoginType } from '@/type/login'

// login
export function login(data: UserLoginType) {
  return service.post('/api/login', data)
}
