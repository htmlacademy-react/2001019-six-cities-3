import {store} from '../../store';
import './error.css';
import {fetchOffersAction} from '@/store/offer-data/offer-data.api-actions.ts';

function Error(): JSX.Element {

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

export default Error;
