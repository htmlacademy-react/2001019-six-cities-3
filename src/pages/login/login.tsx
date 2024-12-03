import LoginForm from '../../components/blocks/login-form/login-form.tsx';
import Layout from "../../components/layout/layout.tsx";

function Login(): JSX.Element {
  return (
    <Layout page={'login'}>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
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
