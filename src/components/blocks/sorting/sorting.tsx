import {SortingOptionsDictionary, SortType, SortValue} from '@/const.tsx';
import { clsx } from 'clsx';
import {useAppDispatch} from '@/hooks';
import {useRef, useState} from 'react';
import useOnClickOutside from 'use-onclickoutside';
import {setActiveSorting} from '@/store/app';
import {memo} from 'react';

export type TSorting = {
  activeSorting: SortValue;
};

function Sorting({activeSorting}: TSorting): JSX.Element {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const dispatch = useAppDispatch();

  const handleClick = (sortType: SortValue) => {
    setOpen(false);
    dispatch(setActiveSorting({activeSorting: sortType}));
  };

  useOnClickOutside(ref, () => setOpen(false));

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
        onClick={ () => setOpen(true) }
      >
          Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={clsx('places__options places__options--custom', open && 'places__options--opened')}
        ref={ref}
      >
        {
          Object.keys(SortType).map((sortType) => (
            <li
              key={sortType}
              onClick={() => handleClick((sortType as SortValue))}
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

export default memo(Sorting);
