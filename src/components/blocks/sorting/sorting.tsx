import SortingItem from '../sorting-item/sorting-item.tsx';
import {sortingOptions} from '../../../const.tsx';


function Sorting(): JSX.Element {
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
          sortingOptions.map((sortingItem) => <SortingItem option={sortingItem.name} key={sortingItem.id}/>)
        }
      </ul>
    </form>
  );
}

export default Sorting;
