import OfferCard from '../offer-card/offer-card.tsx';
import {TOffer} from "../offer-card/types.ts";

type TOfferList = {
  offers: TOffer[]
};

function OfferList({offers}: TOfferList): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferCard
            placeCardTitle={offer.title}
            placeCardType={offer.type}
            id={offer.id}
            key={offer.id}
            img={offer.images[0] ?? null}
            priceValue={offer.price}
            rating={offer.rating}
          />))
      }
    </div>
  );
}

export default OfferList;
