import {AppRoute, AuthorizationStatus} from '../../const.tsx';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../authorizationStatus.ts';

type PrivateRouteProps = {
  isReverse?: boolean;
  children: JSX.Element;
}

function PrivateRoute({isReverse, children}: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus); //

  return (
    authorizationStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth) ?
      children :
      <Navigate to={isReverse ? AppRoute.Root : AppRoute.Login} />
  );
}

export default PrivateRoute;
