import LocationList from '../../components/blocks/location-list/location-list.tsx';
import Sorting from '../../components/blocks/sorting/sorting.tsx';
import Map from '../../components/blocks/map/map.tsx';
import PlacesFound from '../../components/blocks/places-found/places-found.tsx';
import OfferList from '../../components/blocks/offer-list/offer-list.tsx';
import {placesFoundNumber} from '../../const.tsx';
import {TOffer} from "../../components/blocks/offer-card/types.ts";

type TMain = {
  offers: TOffer[]
};

function Main({offers}: TMain): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <PlacesFound placesFoundCount={placesFoundNumber} />
              <Sorting />
              <OfferList offers={offers} />
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
