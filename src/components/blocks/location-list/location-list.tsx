import LocationItem from '../location-item/location-item.tsx';
import {cities} from '../../../const.tsx';

function LocationList(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city) => <LocationItem city={city.name} key={city.id}/>)
          }
        </ul>
      </section>
    </div>
  );
}

export default LocationList;
