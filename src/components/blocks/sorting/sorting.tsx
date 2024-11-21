import {SortType} from '../../../const.tsx';
import React, {Dispatch} from 'react';

type TSorting = {
    setSortType: Dispatch<string>;
    currentSortType: string;
};

function Sorting({currentSortType, setSortType}: TSorting): JSX.Element {
  const handleClick = (evt: React.MouseEvent) => {
    const target = evt.target as HTMLElement;
    const sortType = target.textContent;

    if (sortType) {
      setSortType(sortType);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
                  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened" onClick={handleClick}>
        <li className={currentSortType ? 'places__option places__option--active' : 'places__option'} tabIndex={0}>{SortType.POPULAR}</li>
        <li className={currentSortType ? 'places__option places__option--active' : 'places__option'} tabIndex={0}>{SortType.CHEAP}</li>
        <li className={currentSortType ? 'places__option places__option--active' : 'places__option'} tabIndex={0}>{SortType.EXPENSIVE}</li>
        <li className={currentSortType ? 'places__option places__option--active' : 'places__option'} tabIndex={0}>{SortType.RATING}</li>
      </ul>
    </form>
  );
}

export default Sorting;
