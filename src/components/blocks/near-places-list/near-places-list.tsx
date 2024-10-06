import {mockOffers} from '../../../mock/offers.ts';
import OfferCard from '../offer-card/offer-card.tsx';

function NearPlacesList(): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {
        mockOffers.map((offer) => (
          <OfferCard
            placeCardTitle={offer.title}
            placeCardType={offer.type}
            id={offer.id}
            img={offer.previewImage}
            priceValue={offer.price}
            rating={offer.rating}
            key={offer.id}
          />))
      }
    </div>
  );
}

export default NearPlacesList;
