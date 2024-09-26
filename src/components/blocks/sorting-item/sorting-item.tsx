type SortingItemProps = {
    option: string;
}

function SortingItem(sortingItemData: SortingItemProps): JSX.Element {
  return (
    <li className="places__option" tabIndex={0}>{sortingItemData.option}</li>
  );
}

export default SortingItem;
