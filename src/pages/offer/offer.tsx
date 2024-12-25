import OfferGallery from '../../components/blocks/offer-gallery/offer-gallery.tsx';
import Map from '../../components/blocks/map/map.tsx';
import {useParams} from 'react-router-dom';
import NotFound from '../not-found/not-found.tsx';
import Reviews from '../../components/blocks/reviews/reviews.tsx';
import {AuthorizationStatus, GetRatingPercent, TCity} from '../../const.tsx';
import OfferCard from '../../components/blocks/offer-card/offer-card.tsx';
import Layout from '../../components/layout/layout.tsx';
import {useAppSelector} from '../../hooks';
import {
  getComments, getCommentsErrorStatus,
  getIsCommentsDataLoading,
  getIsNearbyOffersDataLoading,
  getIsOfferDataLoading,
  getNearbyOffers, getNearbyOffersErrorStatus,
  getOffer, getOfferErrorStatus
} from '../../store/offer-data/offer-data.selectors.ts';
import {store} from '../../store';
import {fetchCommentsAction, fetchNearOfferAction, fetchOfferAction} from '../../store/api-actions.ts';
import LoadingScreen from '../loading/loading-screen.tsx';
import ErrorScreen from '@/pages/error/error-screen.tsx';

type TOfferProps = {
  cities: TCity[];
  authorizationStatus: AuthorizationStatus;
};

function OfferInsideGoodsItem({goodsItem}: {goodsItem: string}): JSX.Element {
  return (
    <li className="offer__inside-item">
      {goodsItem}
    </li>
  );
}

function Offer({cities, authorizationStatus}: TOfferProps): JSX.Element {
  const isOfferDataLoading = useAppSelector(getIsOfferDataLoading);
  const isNearbyOffersDataLoading = useAppSelector(getIsNearbyOffersDataLoading);
  const isCommentsDataLoading = useAppSelector(getIsCommentsDataLoading);
  const currentOffer = useAppSelector(getOffer);
  const nearbyOffersData = useAppSelector(getNearbyOffers);
  const commentsData = useAppSelector(getComments);

  const offerHasError = useAppSelector(getOfferErrorStatus);
  const nearbyHasError = useAppSelector(getNearbyOffersErrorStatus);
  const commentsHasError = useAppSelector(getCommentsErrorStatus);

  const params = useParams();
  const offerId = params.id;
  const isCorrectOffer = currentOffer && currentOffer.id === offerId;
  const nearbyOffers = nearbyOffersData.offers;
  const isCorrectNearbyOffers = nearbyOffersData.offerId === offerId;
  const isCorrectComments = commentsData.offerId === offerId;
  const comments = commentsData.reviews;

  if (!offerId) {
    return (
      <NotFound />
    );
  }

  if (offerHasError) {
    return (
      <ErrorScreen />);
  }

  if (!isOfferDataLoading && !isNearbyOffersDataLoading &&
      !isCorrectOffer && !isCorrectNearbyOffers &&
      !isCorrectComments && !isCommentsDataLoading) {
    store.dispatch(fetchOfferAction({id: offerId}));
    if (!nearbyHasError) {
      store.dispatch(fetchNearOfferAction({id: offerId}));
    }
    if (!commentsHasError) {
      store.dispatch(fetchCommentsAction({id: offerId}));
    }
  }

  if (!isCorrectOffer && !isCorrectNearbyOffers) {
    return (
      <LoadingScreen />
    );
  }

  if (!currentOffer) {
    return (
      <NotFound />
    );
  }

  let city = cities.find((item) => item.title === currentOffer.city.name);

  if (!city) {
    city = cities[0];
  }

  const nearOffersPlusCurrent = [...nearbyOffers.filter((_, index) => index < 3), currentOffer];

  return (
    <Layout page='offer'>
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
                  <span style={{width: `${GetRatingPercent(currentOffer.rating)}%`}}></span>
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
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {currentOffer.goods && currentOffer.goods.map((goodsItem) => <OfferInsideGoodsItem goodsItem={goodsItem} key={currentOffer.id + goodsItem}/>)}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {currentOffer.host.name}
                  </span>
                  <span className="offer__user-status">
                    Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <Reviews reviews={comments} isAuth={authorizationStatus === AuthorizationStatus.Auth} offerId={offerId} />
              </section>
            </div>
          </div>
          <Map city={city} offers={nearOffersPlusCurrent} className='offer__map'/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {
                nearbyOffers.map((offer) => (
                  <OfferCard
                    title={offer.title}
                    type={offer.type}
                    id={offer.id}
                    image={offer.previewImage}
                    price={offer.price}
                    rating={offer.rating}
                    key={offer.id}
                    cardType='near'
                    isFavorite={offer.isFavorite}
                    isPremium={offer.isPremium}
                  />))
              }
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Offer;
