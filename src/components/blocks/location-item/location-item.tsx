import {useAppDispatch} from '../../../hooks';
import {changeCity} from '../../../store/action.ts';
import {TCity} from '../../../const.tsx';

type LocationItemProps = {
  city: TCity;
  isActive: boolean;
}
function LocationItem({isActive, city}: LocationItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(changeCity({city: city}));
  };

  return (
    <li className="locations__item" onClick={handleClick}>
      <a
        className={isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
        href="#"
      >
        <span>{city.title}</span>
      </a>
    </li>
  );
}

export default LocationItem;
