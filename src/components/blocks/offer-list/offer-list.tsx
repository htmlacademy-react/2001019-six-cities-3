import OfferCard from '../offer-card/offer-card.tsx';
import {TOffer} from '../offer-card/types.ts';
import {useAppDispatch} from '../../../hooks';
import {setActiveOffer} from '../../../store/action.ts';

type TOfferList = {
  offers: TOffer[];
};

function OfferList({offers}: TOfferList): JSX.Element {
  const dispatch = useAppDispatch();

  const handleHover = (offerId : string | null) => {
    if (offerId) {
      const offer = offers.find((item) => item.id === offerId);
      dispatch(setActiveOffer({offer: offer || null}));
    } else {
      dispatch(setActiveOffer({offer: null}));
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
