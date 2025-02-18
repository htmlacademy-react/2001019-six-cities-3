import Layout from '../../components/layout/layout.tsx';
import {FormEvent, useRef} from 'react';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {getIsLoginLoading} from '@/store/user';
import {toast} from 'react-toastify';
import {loginAction} from '@/store/user/user.api-actions.ts';
const VALID_PASSWORD_REGULAR_EXPRESSION = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

function Login(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const isLoginLoading = useAppSelector(getIsLoginLoading);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (passwordRef.current !== null && !(VALID_PASSWORD_REGULAR_EXPRESSION.test(passwordRef.current?.value))) {
      toast.warn('Invalid email or password');
      return;
    }

    if (loginRef.current !== null && passwordRef.current !== null) {
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
