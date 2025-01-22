import OfferCard from '../offer-card/offer-card.tsx';
import {TOffer} from '../offer-card/types.ts';
import {useAppDispatch} from '@/hooks';
import {setActiveOfferId} from '@/store/app';

type TOfferList = {
  offers: TOffer[];
};

function OfferList({offers}: TOfferList): JSX.Element {
  const dispatch = useAppDispatch();

  const handleHover = (offerId : string | null) => {
    if (offerId) {
      dispatch(setActiveOfferId({ offerId }));
    } else {
      dispatch(setActiveOfferId({offerId: null}));
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
            image={offer.previewImage}
            price={offer.price}
            rating={offer.rating}
            isPremium={offer.isPremium}
            cardType={'main'}
            onHover={handleHover}
          />))
      }
    </div>
  );
}

export default OfferList;
