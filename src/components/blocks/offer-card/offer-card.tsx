import {Link} from 'react-router-dom';

type PlaceCardProps = {
  images?: string;
  isPremium?: boolean;
  price: number;
  rating: number;
  title: string;
  type: string;
  id: string;
  handleHover?: (offerId: string | null) => void;
}

function OfferCard({id, price, rating, title, type, handleHover, images, isPremium}: PlaceCardProps): JSX.Element {
  const handleMouseOn = () => {
    if (handleHover) {
      handleHover(id);
    }
  };

  const handleMouseOff = () => {
    if (handleHover) {
      handleHover(null);
    }
  };

  return (
    <Link to={`offer/${id}`}>
      <article
        className="cities__card place-card"
        id={id}
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseOff}
      >
        { isPremium && (<div className="place-card__mark"><span>Premium</span></div>) }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <img
            className="place-card__image"
            src={images ?? ''}
            width="260"
            height="200"
            alt="Place image"
          />
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${rating}`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            {title}
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </Link>
  );
}

export default OfferCard;
