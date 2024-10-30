import {AppRoute} from "../../../const.tsx";
import {Link} from "react-router-dom";

type PlaceCardProps = {
  images?: string;
  isPremium?: boolean;
  price: number;
  rating: number;
  title: string;
  type: string;
  id: string;
  handleHover: (offerId: string | null) => void;
}

function OfferCard(placeCardData: PlaceCardProps): JSX.Element {
  // Не понятно какой тип указывать у event'а в обработчике событий
  const handleMouseOn = (evt : {target:object}) => {
    if (evt.target) {
      const target = evt.target as HTMLInputElement
      const offerId = target.closest('article')?.id;
      placeCardData.handleHover(offerId || null);
    }
  }

  const handleMouseOff = () => {
    placeCardData.handleHover(null);
  }
  return (
    <article
      className="cities__card place-card"
      id={placeCardData.id}
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseOff}
      >
      { placeCardData.isPremium && (<div className="place-card__mark"><span>Premium</span></div>) }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${placeCardData.id}`}>
          <img
            className="place-card__image"
            src={placeCardData.images ?? ''}
            width="260"
            height="200"
            alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{placeCardData.price}</b>
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
            <span style={{width: `${placeCardData.rating}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{placeCardData.title}</a>
        </h2>
        <p className="place-card__type">{placeCardData.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
