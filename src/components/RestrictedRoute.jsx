/**
 * - If the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';

export default function RestrictedRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
