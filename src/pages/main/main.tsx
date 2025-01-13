import LocationList from '../../components/blocks/location-list/location-list.tsx';
import Sorting from '../../components/blocks/sorting/sorting.tsx';
import Map from '../../components/blocks/map/map.tsx';
import OfferList from '../../components/blocks/offer-list/offer-list.tsx';
import {TOffer} from '@/components/blocks/offer-card/types.ts';
import {useAppSelector} from '@/hooks';
import Layout from '../../components/layout/layout.tsx';
import {getSortedOffers} from './utils.tsx';
import {getActiveCity, getActiveSorting} from '@/store/app';
import Empty from '@/components/blocks/empty/empty.tsx';
import {clsx} from 'clsx';

type TMain = {
  offers: TOffer[];
};

function Main({offers}: TMain): JSX.Element {
  const activeSorting = useAppSelector(getActiveSorting);
  const city = useAppSelector(getActiveCity);
  const filteredOffers = offers.filter((offer) => offer.city.name === city.title);
  const sortedOffers = getSortedOffers(filteredOffers, activeSorting);

  return (
    <Layout page='main'>
      <div className="page page--gray page--main">
        <main className={clsx((filteredOffers.length === 0 && 'page__main--index-empty'), 'page__main', 'page__main--index')}>
          <h1 className="visually-hidden">Cities</h1>
          <LocationList city={city}/>
          <div className="cities">
            <div className={clsx((filteredOffers.length === 0 && 'cities__places-container--empty'), 'cities__places-container', 'container')}>
              {filteredOffers.length > 0 &&
                <>
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{sortedOffers.length} places to stay in {city.title}</b>
                    <Sorting activeSorting={activeSorting}/>
                    <OfferList offers={sortedOffers} />
                  </section>
                  <div className="cities__right-section">
                    <Map city={city} offers={sortedOffers} className='cities__map'/>
                  </div>
                </>}
              {filteredOffers.length === 0 && <Empty />}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Main;
