import LoginView from '../view/login/LoginView'
import AdminView from '../view/admin/AdminView'
const baseRouter = [
  { path: '/', element: <LoginView /> },
  { path: '/admin', element: <AdminView />, children: [] }
]
export default baseRouter
