import { SortingOptionsDictionary } from '../../../const.tsx';
//import { Dispatch } from 'react';
import { clsx } from 'clsx';

type TSorting = {
    //setSortType: Dispatch<string>;
    setSortType: (sortType: string) => void;
    currentSortType: string;
};

function Sorting({currentSortType, setSortType}: TSorting): JSX.Element {
  const handleClick = (sortType: string) => {
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
      <ul className="places__options places__options--custom places__options--opened">
        {
          Object.keys(SortingOptionsDictionary).map((sortType) => (
            <li
              key={sortType}
              onClick={() => handleClick(sortType)}
              className={clsx(currentSortType === sortType && 'places__option--active', 'places__option')}
              tabIndex={0}
            >
              {SortingOptionsDictionary[sortType]}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default Sorting;
