type PlacesFoundProps = {
  placesFoundCount: number;
};

function PlacesFound(placesFoundData: PlacesFoundProps): JSX.Element {
  return (
    <b className="places__found">{placesFoundData.placesFoundCount} places to stay in Amsterdam</b>
  );
}

export default PlacesFound;
