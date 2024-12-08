type BookmarkProps = {
  isFavorite: boolean;
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

function Bookmark({isFavorite}: BookmarkProps): JSX.Element {
  const bookmarkClasses = classes[isFavorite ? 'favorite' : 'normal'];

  return (
    <button className={bookmarkClasses.buttonClass} type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{bookmarkClasses.spanSign} bookmarks</span>
    </button>
  );
}

export default Bookmark;
