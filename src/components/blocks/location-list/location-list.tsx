import LocationItem from '../location-item/location-item.tsx';
import {Dispatch} from 'react';
import {TCity} from '../offer-card/types.ts';

type TLocationListProps = {
    cities: TCity[];
    activeCity: TCity;
    setActiveCity: Dispatch<TCity>;
};

function LocationList({cities, activeCity, setActiveCity}: TLocationListProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul
          className="locations__list tabs__list"
        >
          {
            cities.map((city: TCity) => <LocationItem city={city} key={city.title} activeCity={activeCity} setActiveCity={setActiveCity}/>)
          }
        </ul>
      </section>
    </div>
  );
}

export default LocationList;
