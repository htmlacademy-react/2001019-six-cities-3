import OfferCard from '../offer-card/offer-card.tsx';
import {TOffer} from "../offer-card/types.ts";
import {useState} from "react";
import {Nullable} from "vitest";

type TOfferList = {
  offers: TOffer[]
};

function OfferList({offers}: TOfferList): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Nullable<TOffer>>(null);
  const handleHover = (offerId? : string) => {
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
