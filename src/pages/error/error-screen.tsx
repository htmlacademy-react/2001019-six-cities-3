import {fetchOffersAction} from '../../store/api-actions.ts';
import {store} from '../../store';

function ErrorScreen(): JSX.Element {

  return (
    <section className="error" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      padding: '30vh',
      alignItems: 'center'}}
    >
      <p className="error__text" style={{
        fontSize: '50px',
        color: '#4481c3',
      }}
      >
        Something went wrong
      </p>
      <button
        onClick={() => {
          store.dispatch(fetchOffersAction());
        }}
        className="replay replay--error"
        type="button"
        style={{
          fontSize: '25px',
          backgroundColor: '#4481c3',
          color: '#ffffff',
          padding: '10px 20px',
          borderRadius: '10px',
        }}
      >
        Please try again
      </button>
    </section>
  );
}

export default ErrorScreen;
