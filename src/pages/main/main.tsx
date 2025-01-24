import LocationList from '../../components/blocks/location-list/location-list.tsx';
import Sorting from '../../components/blocks/sorting/sorting.tsx';
import Map from '../../components/blocks/map/map.tsx';
import OfferList from '../../components/blocks/offer-list/offer-list.tsx';
import {useAppSelector} from '@/hooks';
import Layout from '../../components/layout/layout.tsx';
import {getSortedOffers} from './utils.tsx';
import {getActiveCity, getActiveSorting} from '@/store/app';
import EmptyList from '@/components/blocks/empty-list/empty-list.tsx';
import {clsx} from 'clsx';
import {useMemo} from 'react';
import {getOffers} from '@/store/offer-data';

function Main(): JSX.Element {
  const activeSorting = useAppSelector(getActiveSorting);
  const city = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);

  const currentOffers = useMemo(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city.title);

    return getSortedOffers(filteredOffers, activeSorting);
  }, [activeSorting, city, offers]);

  return (
    <Layout page='main'>
      <div className="page page--gray page--main">
        <main className={clsx((currentOffers.length === 0 && 'page__main--index-empty'), 'page__main', 'page__main--index')}>
          <h1 className="visually-hidden">Cities</h1>
          <LocationList city={city}/>
          <div className="cities">
            <div className={clsx((currentOffers.length === 0 && 'cities__places-container--empty'), 'cities__places-container', 'container')}>
              {currentOffers.length > 0 &&
                <>
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{currentOffers.length} {currentOffers.length === 1 ? 'place' : 'places'} to stay in {city.title}</b>
                    <Sorting activeSorting={activeSorting}/>
                    <OfferList offers={currentOffers} />
                  </section>
                  <div className="cities__right-section">
                    <Map city={city} offers={currentOffers} className='cities__map' currentOfferId={null}/>
                  </div>
                </>}
              {currentOffers.length === 0 && <EmptyList />}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Main;
