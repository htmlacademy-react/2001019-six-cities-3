import { mockOffers } from '../../mock/offers.ts';
import { TOffer } from '../../components/blocks/offer-card/types.ts';

const MAX_NEAR_OFFERS = 3;

export const getNearOffers = (offer: TOffer) => {
  const nearOffers: TOffer[] = [];
  for (let i = 0; i < mockOffers.length; i++) {
    if (mockOffers[i].id !== offer.id && mockOffers[i].city.name === offer.city.name) {
      nearOffers.push(mockOffers[i]);
    }

    if (nearOffers.length >= MAX_NEAR_OFFERS) {
      break;
    }
  }

  return nearOffers;
};
