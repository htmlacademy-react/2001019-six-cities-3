import OfferCard from '../../components/blocks/offer-card/offer-card.tsx';
import Header from '../../components/layout/header/header.tsx';
import LocationList from '../../components/blocks/location-list/location-list.tsx';
import Sorting from '../../components/blocks/sorting/sorting.tsx';
import Map from '../../components/blocks/map/map.tsx';
import {mockOffers} from '../../mock/offers.ts';

function Main(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                {
                  mockOffers.map((offer) => (
                    <OfferCard
                      placeCardTitle={offer.title}
                      placeCardType={offer.type}
                      id={offer.id}
                      key={offer.id}
                      img={offer.previewImage}
                      priceValue={offer.price}
                      rating={offer.rating}
                    />))
                }
              </div>
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
