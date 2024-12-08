import LocationList from '../../components/blocks/location-list/location-list.tsx';
import Sorting from '../../components/blocks/sorting/sorting.tsx';
import Map from '../../components/blocks/map/map.tsx';
import OfferList from '../../components/blocks/offer-list/offer-list.tsx';
import {TOffer} from '../../components/blocks/offer-card/types.ts';
import {useAppSelector} from '../../hooks';
import Layout from '../../components/layout/layout.tsx';
import {getSortedOffers} from './utils.tsx';

type TMain = {
  offers: TOffer[];
};

function Main({offers}: TMain): JSX.Element {
  const activeSorting = useAppSelector((state) => state.activeSorting);
  const city = useAppSelector((state) => state.city);
  const filteredOffers = offers.filter((offer) => offer.city.name === city.title);
  const sortedOffers = getSortedOffers(filteredOffers, activeSorting);

  return (
    <Layout page='main'>
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <LocationList city={city}/>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{sortedOffers.length} places to stay in {city.title}</b>
                <Sorting activeSorting={activeSorting}/>
                <OfferList offers={sortedOffers} />
              </section>
              <div className="cities__right-section">
                <Map city={city} offers={sortedOffers} className='cities__map'/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Main;
