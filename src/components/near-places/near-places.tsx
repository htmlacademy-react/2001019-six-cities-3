import OfferCard from '../blocks/offer-card/offer-card.tsx';
import {TOffer} from '../blocks/offer-card/types.ts';

type TNearPlaces = {
  offers: TOffer[];
};

function NearPlaces({offers}: TNearPlaces): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
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
    </section>
  );
}

export default NearPlaces;
