import {Dispatch} from 'react';
import {TCity} from '../offer-card/types.ts';

type LocationItemProps = {
  city: TCity;
  activeCity: TCity;
  setActiveCity: Dispatch<TCity>;
}
function LocationItem({city, activeCity, setActiveCity}: LocationItemProps): JSX.Element {

  const handleClick = () => {
    setActiveCity(city);
  };

  return (
    <li className="locations__item" onClick={handleClick}>
      <a
        className={city.title === activeCity.title ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
        href="#"
      >
        <span>{city.title}</span>
      </a>
    </li>
  );
}

export default LocationItem;
