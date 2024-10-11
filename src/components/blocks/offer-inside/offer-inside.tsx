type OfferInsideItemProps = {
  good: string;
}

type OfferInsideProps = {
  goods: string[];
  offerId: string;
}
const OfferInsideItem = (offerInsideItemData: OfferInsideItemProps) => (
  <li className="offer__inside-item">
    {offerInsideItemData.good}
  </li>
);
function OfferInside({goods, offerId}: OfferInsideProps): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((good) => <OfferInsideItem key={offerId + good} good={good}/>)}
      </ul>
    </div>
  );
}

export default OfferInside;
