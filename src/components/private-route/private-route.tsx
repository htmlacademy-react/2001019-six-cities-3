import {AppRoute} from '../../const.tsx';
import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  condition: boolean;
  redirectTo: AppRoute;
  children: JSX.Element;
}

function PrivateRoute({children, condition, redirectTo}: PrivateRouteProps) {
  return (
    condition
      ? children
      : <Navigate to={redirectTo} />
  );
}

export default PrivateRoute;
