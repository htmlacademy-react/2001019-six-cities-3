import {Link} from 'react-router-dom';
import { clsx } from 'clsx';

type PlaceCardProps = {
  images?: string;
  isPremium?: boolean;
  price: number;
  rating: number;
  title: string;
  type: string;
  id: string;
  cardType: 'favorite' | 'main' | 'near';
  handleHover?: (offerId: string | null) => void;
}

const classes = {
  main: {
    containerClass: 'cities__card',
    wrapperClass: 'cities__image-wrapper',
    infoClass: '',
  },
  favorite: {
    containerClass: 'favorites__card',
    wrapperClass: 'favorites__image-wrapper',
    infoClass: 'favorites__card-info',
  },
  near: {
    containerClass: 'near-places__card',
    wrapperClass: 'near-places__image-wrapper',
    infoClass: '',
  },
}

const imgSize = {
  main: {
    width: 260,
    height: 200,
  },
  favorite: {
    width: 150,
    height: 110,
  },
  near: {
    width: 260,
    height: 200,
  },
}

function OfferCard({id, price, rating, title, type, handleHover, images, isPremium, cardType}: PlaceCardProps): JSX.Element {

  const cardClasses = classes[cardType];
  const cardSize = imgSize[cardType];
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
      <article
        className={clsx(cardClasses.containerClass, "place-card")}
        id={id}
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseOff}
      >
        { isPremium && (<div className="place-card__mark"><span>Premium</span></div>) }
        <div className={clsx(cardClasses.wrapperClass, "place-card__image-wrapper")}>
          <Link to={`offer/${id}`}>

          <img
            className="place-card__image"
            src={images ?? ''}
            width={cardSize.width}
            height={cardSize.height}
            alt="Place image"
          />
          </Link>
        </div>
        <div className={clsx(cardClasses.infoClass, "place-card__info")}>
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
  );
}

export default OfferCard;
