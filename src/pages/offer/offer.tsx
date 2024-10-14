import ReviewForm from '../../components/blocks/review-form/review-form.tsx';
import ReviewList from '../../components/blocks/review-list/review-list.tsx';
import OfferGallery from '../../components/blocks/offer-gallery/offer-gallery.tsx';
import OfferInside from '../../components/blocks/offer-inside/offer-inside.tsx';
import NearPlacesList from '../../components/blocks/near-places-list/near-places-list.tsx';
import Map from '../../components/blocks/map/map.tsx';
import OfferFeatures from '../../components/blocks/offer-features/offer-features.tsx';
import {useParams} from 'react-router-dom';
import {mockDetailOffers} from '../../mock/detail-offers.ts';
function Offer(): JSX.Element {
  const params = useParams();
  const offer = mockDetailOffers.find((item) => item.id === params.id) ?? mockDetailOffers[0];

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <OfferGallery key={`${offer.id }gallery`} offerId={offer.id} images={offer.images} />
        <div className="offer__container container">
          <div className="offer__wrapper">
            <div className="offer__mark">
              <span>Premium</span>
            </div>
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {offer.title}
                {/*Beautiful &amp; luxurious studio at great location*/}
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
              <span className="offer__rating-value rating__value">{offer.rating}</span>
            </div>
            <OfferFeatures />
            <div className="offer__price">
              <b className="offer__price-value">&euro;120</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <OfferInside key={`${offer.id }offerInside`} offerId={offer.id} goods={offer.goods} />
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
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <p className="offer__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
              <ReviewList />
              <ReviewForm />
            </section>
          </div>
        </div>
        <Map />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <NearPlacesList />
        </section>
      </div>
    </main>
  );
}

export default Offer;
