import {useSelector} from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom';

const RequireAuth = ({allowedRoles}) =>{

  const {isLoggedIn, role } = useSelector((state)=> state.auth);

 return isLoggedIn && allowedRoles.includes(role) ? (
  <Outlet />
) : isLoggedIn ? (
  <Navigate to="/denied" replace />
) : (
  <Navigate to="/signin" replace />
);


}

export default RequireAuth