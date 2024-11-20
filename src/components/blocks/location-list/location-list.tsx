import LocationItem from '../location-item/location-item.tsx';
import {TCity} from '../offer-card/types.ts';

type TLocationListProps = {
    city: TCity;
    cities: TCity[];
};

function LocationList({city, cities}: TLocationListProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul
          className="locations__list tabs__list"
        >
          {
            cities.map((cityItem: TCity) => <LocationItem isActive={cityItem.title === city.title} city={cityItem} key={cityItem.title} />)
          }
        </ul>
      </section>
    </div>
  );
}

export default LocationList;
