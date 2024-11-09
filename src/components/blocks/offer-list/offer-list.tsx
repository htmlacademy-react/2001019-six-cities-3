import OfferCard from '../offer-card/offer-card.tsx';
import {TOffer} from '../offer-card/types.ts';
import {Dispatch} from 'react';

type TOfferList = {
  offers: TOffer[];
  setActiveOffer: Dispatch<TOffer | null>;
};

function OfferList({offers, setActiveOffer}: TOfferList): JSX.Element {
  const handleHover = (offerId : string | null) => {
    if (offerId) {
      const offer = offers.find((item) => item.id === offerId);
      setActiveOffer(offer || null);
    } else {
      setActiveOffer(null);
    }
  };

  return (
    <div className="cities__places-list places__list tabs__content" >
      {
        offers.map((offer) => (
          <OfferCard
            key={offer.id}
            title={offer.title}
            type={offer.type}
            id={offer.id}
            images={offer.images[0] ?? null}
            price={offer.price}
            rating={offer.rating}
            isPremium={offer.isPremium}
            handleHover={handleHover}
          />))
      }
    </div>
  );
}

export default OfferList;
