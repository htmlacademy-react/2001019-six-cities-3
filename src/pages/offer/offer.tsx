import OfferGallery from '../../components/blocks/offer-gallery/offer-gallery.tsx';
import Map from '../../components/blocks/map/map.tsx';
import {useParams} from 'react-router-dom';
import {TOffer} from '../../components/blocks/offer-card/types.ts';
import NotFound from '../not-found/not-found.tsx';
import Reviews from '../../components/blocks/reviews/reviews.tsx';
import {AuthorizationStatus} from '../../const.tsx';
import {TReview} from '../../components/blocks/review-item/types.ts';
import NearPlaces from '../../components/near-places/near-places.tsx';

type TOfferProps = {
  offers: TOffer[];
  reviews: TReview[];
  authorizationStatus: AuthorizationStatus;
};

function OfferInsideGoodsItem({goodsItem}: {goodsItem: string}): JSX.Element {
  return (
    <li className="offer__inside-item">
      {goodsItem}
    </li>
  );
}

function Offer({offers, reviews, authorizationStatus}: TOfferProps): JSX.Element {
  const params = useParams();
  const currentOffer = offers.find((item: TOffer) => item.id === params.id) ?? (offers[0] ?? null);

  reviews = reviews.splice(0, 3);

  if (!currentOffer) {
    return <NotFound />;
  }

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <OfferGallery key={`${currentOffer.id }gallery`} offerId={currentOffer.id} images={currentOffer.images} />
        <div className="offer__container container">
          <div className="offer__wrapper">
            { currentOffer.isPremium && (<div className="offer__mark"><span>Premium</span></div>) }
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {currentOffer.title}
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: '80%'}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {currentOffer.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {currentOffer.bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {currentOffer.maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{currentOffer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            {/**/}
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {currentOffer.goods.map((goodsItem) => <OfferInsideGoodsItem goodsItem={goodsItem} key={currentOffer.id + goodsItem}/>)}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                </div>
                <span className="offer__user-name">
                    Angelina
                </span>
                <span className="offer__user-status">
                    Pro
                </span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {currentOffer.description}
                </p>
                <p className="offer__text">
                  {currentOffer.description}
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
              <Reviews reviews={reviews} isAuth={authorizationStatus === AuthorizationStatus.Auth}/>
            </section>
          </div>
        </div>
        <Map />
      </section>
      <div className="container">
        <NearPlaces offers={offers} />
      </div>
    </main>
  );
}

export default Offer;
