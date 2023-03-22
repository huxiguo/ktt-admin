import { Navigate, useLocation } from 'react-router-dom'
import { ReactNode } from 'react'
interface propsInt {
  children?: ReactNode
}
function Private(props: propsInt) {
  let token = sessionStorage.getItem('token')
  const location = useLocation()
  if (token) {
    return <>{props.children}</>
  } else {
    return <Navigate to={'/?redirect=' + location.pathname}></Navigate>
  }
}

export default Private
