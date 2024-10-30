import OfferCard from '../offer-card/offer-card.tsx';
import {TOffer} from "../offer-card/types.ts";
import { useState} from "react";

type TOfferList = {
  offers: TOffer[]
};

function OfferList({offers}: TOfferList): JSX.Element {
  const [activeOffer, setActive] = useState('');
  console.log(activeOffer);

  const mouseOverHandler = (evt) => {
    if (evt.target.id) {
      const offer = offers.find((item) => evt.target.id === item.id)

      if (offer) setActive(offer);
    }
  };

  // const mouseOutHandler = () => {
  //   setActive('');
  // };

  return (
    <div className="cities__places-list places__list tabs__content"
         onMouseOver={mouseOverHandler}
         // onMouseLeave={mouseOutHandler}
    >
      {
        offers.map((offer) => (
          <OfferCard
            title={offer.title}
            type={offer.type}
            id={offer.id}
            key={offer.id}
            images={offer.images[0] ?? null}
            price={offer.price}
            rating={offer.rating}
            isPremium={offer.isPremium}
          />))
      }
    </div>
  );
}

export default OfferList;
