import { TOffer } from "../../types.ts";
import { SortType } from "../../const.tsx";

export const getSortedOffers = (offers: TOffer[], currentSortType: string) => {
  switch (currentSortType) {
    case SortType.PriceDesc:
      offers.sort((a, b) => b.price - a.price);
      break;
    case SortType.PriceAsc:
      offers.sort((a, b) => a.price - b.price);
      break;
    case SortType.RatingDesc:
      offers.sort((a, b) => b.rating - a.rating);
      break;
  }
  return offers;
}
