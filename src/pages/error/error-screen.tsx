import {fetchOffersAction} from '../../store/api-actions.ts';
import {store} from '../../store';
import './error-screen.css';

function ErrorScreen(): JSX.Element {

  return (
    <section className="error">
      <p className="error__text">
        Something went wrong
      </p>
      <button
        onClick={() => {
          store.dispatch(fetchOffersAction());
        }}
        className="replay replay--error"
        type="button"
      >
        Please try again
      </button>
    </section>
  );
}

export default ErrorScreen;
