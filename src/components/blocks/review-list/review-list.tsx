import ReviewItem from '../review-item/review-item.tsx';

function ReviewList(): JSX.Element {
  return (
    <ul className="reviews__list">
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </ul>
  );
}

export default ReviewList;
