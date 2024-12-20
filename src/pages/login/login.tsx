import Layout from '../../components/layout/layout.tsx';
import {FormEvent, useRef} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-actions.ts';
import {getIsAuth, getIsLoginLoading} from '../../store/user/user.selectors.ts';
import {AppRoute} from '../../const.tsx';
import {Navigate} from 'react-router-dom';

function Login(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const validPassword = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
  const isAuth = useAppSelector(getIsAuth);
  const isLoginLoading = useAppSelector(getIsLoginLoading);

  if (isAuth) {
    return (
      <Navigate to={AppRoute.Root} />
    );
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null && validPassword) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  return (
    <Layout page="login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={isLoginLoading}
              >
                {isLoginLoading ? 'Loading...' : 'Sign in'}
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Login;
