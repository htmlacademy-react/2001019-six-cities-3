import LocationItem from '../location-item/location-item.tsx';
import {TCity} from '../../../const.tsx';

import {CITIES} from "../../../const.tsx";

type TLocationListProps = {
    city: TCity;
};

function LocationList({city}: TLocationListProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul
          className="locations__list tabs__list"
        >
          {
            CITIES.map((cityItem: TCity) => <LocationItem isActive={cityItem.title === city.title} city={cityItem} key={cityItem.title} />)
          }
        </ul>
      </section>
    </div>
  );
}

export default LocationList;
