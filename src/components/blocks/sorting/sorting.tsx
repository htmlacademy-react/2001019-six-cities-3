import { SortingOptionsDictionary } from '../../../const.tsx';
import { clsx } from 'clsx';
import {useAppDispatch} from "../../../hooks";
import {setActiveSorting} from "../../../store/action.ts";

export type TSorting = {
  activeSorting: string;
};

function Sorting({activeSorting}: TSorting): JSX.Element {
  const dispatch = useAppDispatch();
  const handleClick = (sortType: string) => {
    dispatch(setActiveSorting({activeSorting: sortType}));
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
