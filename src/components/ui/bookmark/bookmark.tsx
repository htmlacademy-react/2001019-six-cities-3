import {useAppDispatch, useAppSelector} from '@/hooks';
import {addFavoriteAction} from '@/store/offer-data/offer-data.api-actions.ts';
import {getFavorites, getIsFavoriteAdding} from '@/store/offer-data';
import { clsx } from 'clsx';
import {getIsAuth} from '@/store/user';
import {redirectToRoute} from '@/store/action.ts';
import {AppRoute} from '@/const.tsx';

type BookmarkProps = {
  offerId: string;
  cardType: 'favorite' | 'main';
}

const newClasses = {
  main: {
    svgClass: 'place-card__bookmark-icon',
    buttonClass: 'place-card__bookmark-button',
    activeClass: 'place-card__bookmark-button--active'
  },
  favorite: {
    svgClass: 'offer__bookmark-icon',
    buttonClass: 'offer__bookmark-button',
    activeClass: 'offer__bookmark-button--active'
  },
};

const imgSize = {
  main: {
    width: 18,
    height: 19,
  },
  favorite: {
    width: 31,
    height: 33,
  },
};

function Bookmark({offerId, cardType}: BookmarkProps): JSX.Element {
  const isAuth = useAppSelector(getIsAuth);
  const iconClasses = newClasses[cardType];
  const buttonClasses = newClasses[cardType];
  const iconSize = imgSize[cardType];
  const favorites = useAppSelector(getFavorites);
  const isFavorite = favorites.some((offer) => offer.id === offerId);
  const dispatch = useAppDispatch();
  const isFavoriteAdding = useAppSelector(getIsFavoriteAdding);

  const handleClick = () => {
    if (isAuth) {
      dispatch(addFavoriteAction({
        offerId: offerId,
        status: isFavorite ? 0 : 1,
      }));
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };

  return (
    <button
      className={clsx(buttonClasses.buttonClass, (isFavorite && buttonClasses.activeClass), 'button')}
      type="button"
      onClick={handleClick}
      disabled={isFavoriteAdding}
    >
      <svg className={iconClasses.svgClass} width={iconSize.width} height={iconSize.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In' : 'To'} bookmarks</span>
    </button>
  );
}

export default Bookmark;
