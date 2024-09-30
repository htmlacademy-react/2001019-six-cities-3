type LocationItemProps = {
  city: string;
}
function LocationItem(locationItemData: LocationItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{locationItemData.city}</span>
      </a>
    </li>
  );
}

export default LocationItem;
