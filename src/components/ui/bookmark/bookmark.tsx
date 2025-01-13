import {useAppDispatch} from '@/hooks';
import {addFavoriteAction} from '@/store/offer-data/offer-data.api-actions.ts';
import {useState} from 'react';

type BookmarkProps = {
  isFavorite: boolean;
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

function Bookmark({isFavorite, offerId}: BookmarkProps): JSX.Element {
  const [isAdded, setAdded] = useState(isFavorite);
  const bookmarkClasses = classes[isAdded ? 'favorite' : 'normal'];
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    setAdded(!isAdded);
  };

  const handleClick = () => {
    dispatch(addFavoriteAction({
      offerId: offerId,
      status: isAdded ? 0 : 1,
      handleAdd: handleAdd,
    }));
  };

  return (
    <button
      className={bookmarkClasses.buttonClass}
      type="button"
      onClick={handleClick}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{bookmarkClasses.spanSign} bookmarks</span>
    </button>
  );
}

export default Bookmark;
