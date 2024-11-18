import LocationList from '../../components/blocks/location-list/location-list.tsx';
import Sorting from '../../components/blocks/sorting/sorting.tsx';
import Map from '../../components/blocks/map/map.tsx';
import OfferList from '../../components/blocks/offer-list/offer-list.tsx';
import {TCity, TOffer} from '../../components/blocks/offer-card/types.ts';
import {useState} from 'react';
import {Nullable} from 'vitest';
import {useAppSelector} from '../../hooks';

type TMain = {
  cities: TCity[];
};

function Main({cities}: TMain): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Nullable<TOffer>>(null);
  const city = useAppSelector((state) => state.city);
  let offers = useAppSelector((state) => state.offers);
  offers = offers.filter((offer) => offer.city.name === city.title);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationList city={city} cities={cities}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city.title}</b>
              <Sorting />
              <OfferList offers={offers} setActiveOffer={setActiveOffer} />
            </section>
            <div className="cities__right-section">
              <Map city={city} offers={offers} activeOffer={activeOffer} mapType={'cities'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
