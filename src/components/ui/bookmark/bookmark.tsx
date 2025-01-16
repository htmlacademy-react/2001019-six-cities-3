import {useAppDispatch, useAppSelector} from '@/hooks';
import {addFavoriteAction} from '@/store/offer-data/offer-data.api-actions.ts';
import {getFavorites, getIsFavoriteAdding} from '@/store/offer-data';

type BookmarkProps = {
  offerId: string;
}

const classes = {
  favorite: {
    buttonClass: 'place-card__bookmark-button button place-card__bookmark-button--active',
    spanSign: 'In',
  },
  normal: {
    buttonClass: 'place-card__bookmark-button button',
    spanSign: 'To',
  }
};

function Bookmark({offerId}: BookmarkProps): JSX.Element {
  const favorites = useAppSelector(getFavorites);
  const isFavorite = favorites.some((offer) => offer.id === offerId);
  //console.log(isFavorite);
  const bookmarkClasses = classes[isFavorite ? 'favorite' : 'normal'];
  const dispatch = useAppDispatch();
  const isFavoriteAdding = useAppSelector(getIsFavoriteAdding);

  const handleClick = () => {
    dispatch(addFavoriteAction({
      offerId: offerId,
      status: isFavorite ? 0 : 1,
    }));
  };

  return (
    <button
      className={bookmarkClasses.buttonClass}
      type="button"
      onClick={handleClick}
      disabled={isFavoriteAdding}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{bookmarkClasses.spanSign} bookmarks</span>
    </button>
  );
}

export default Bookmark;
