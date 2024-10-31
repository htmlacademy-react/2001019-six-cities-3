import OfferCard from '../offer-card/offer-card.tsx';
import {TOffer} from '../offer-card/types.ts';

type TNearPlaces = {
  offers: TOffer[];
};

function NearPlacesList({offers}: TNearPlaces): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {
        offers.map((offer) => (
          <OfferCard
            title={offer.title}
            type={offer.type}
            id={offer.id}
            images={offer.images[0] ?? ''}
            price={offer.price}
            rating={offer.rating}
            key={offer.id}
          />))
      }
    </div>
  );
}

export default NearPlacesList;
