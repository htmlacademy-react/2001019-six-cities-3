import {SortingOptionsDictionary, SortType} from '../../../const.tsx';
import { clsx } from 'clsx';
import {useAppDispatch} from '../../../hooks';
import {useRef} from 'react';
import useOnClickOutside from 'use-onclickoutside';
import {setActiveSorting} from '../../../store/offer-process/offer-process.ts';

export type TSorting = {
  //activeSorting: 'Popular'| 'PriceAsc' | 'PriceDesc' | 'RatingDesc';
  activeSorting: string;
};

function Sorting({activeSorting}: TSorting): JSX.Element {
  const ref = useRef(null);
  const dispatch = useAppDispatch();
  const placesOptionsElement = document.querySelector('.places__options');
  const handleClick = (sortType: string) => {
    dispatch(setActiveSorting({activeSorting: sortType}));
  };

  const handleClickInside = () => {
    if (placesOptionsElement) {
      placesOptionsElement.classList.toggle('places__options--opened');
    }
  };
  const handleClickOutside = () => {
    if (placesOptionsElement) {
      placesOptionsElement.classList.remove('places__options--opened');
    }
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
    >
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleClickInside}
      >
          Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className="places__options places__options--custom"
        onClick={handleClickInside}
        ref={ref}
      >
        {
          Object.keys(SortType).map((sortType) => (
            <li
              key={sortType}
              onClick={() => handleClick(sortType)}
              className={clsx(sortType === activeSorting && 'places__option--active', 'places__option')}
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
