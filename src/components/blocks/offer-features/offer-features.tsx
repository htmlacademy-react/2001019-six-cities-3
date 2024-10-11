const OfferFeature = () => (
  <li className="offer__feature offer__feature--entire">
    Apartment
  </li>
);

function OfferFeatures(): JSX.Element {
  return (
    <ul className="offer__features">
      <OfferFeature />
      <OfferFeature />
      <OfferFeature />
    </ul>
  );
}

export default OfferFeatures;
