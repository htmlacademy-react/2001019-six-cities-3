import LocationList from '../../components/blocks/location-list/location-list.tsx';
import Sorting from '../../components/blocks/sorting/sorting.tsx';
import Map from '../../components/blocks/map/map.tsx';
import OfferList from '../../components/blocks/offer-list/offer-list.tsx';
import {TOffer} from '../../components/blocks/offer-card/types.ts';
import {useState} from 'react';
import {useAppSelector} from '../../hooks';
import {SortType, TCity} from '../../const.tsx';
import Layout from '../../components/layout/layout.tsx';
import {getSortedOffers} from './utils.tsx';

type TMain = {
  cities: TCity[];
  offers: TOffer[];
};

function Main({cities, offers}: TMain): JSX.Element {
  const [currentSortType, setSortType] = useState(SortType.Popular);
  const city = useAppSelector((state) => state.city);
  const filteredOffers = offers.filter((offer) => offer.city.name === city.title);
  const sortedOffers = getSortedOffers(filteredOffers, currentSortType);

  return (
    <Layout page={'main'}>
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <LocationList city={city} cities={cities}/>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{sortedOffers.length} places to stay in {city.title}</b>
                <Sorting currentSortType={currentSortType} setSortType={setSortType}/>
                <OfferList offers={sortedOffers} />
              </section>
              <div className="cities__right-section">
                <Map city={city} offers={sortedOffers} className={'cities__map'}/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Main;
