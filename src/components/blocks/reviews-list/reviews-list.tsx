import ReviewItem from '../review-item/review-item.tsx';
import {TReview} from '../review-item/types.ts';

type TReviewListProps = {
  reviews: TReview[];
}

function ReviewsList({reviews}: TReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review : TReview) => (
        <ReviewItem
          key={review.id}
          rating={review.rating}
          date={review.date}
          comment={review.comment}
          name={review.user.name}
          avatarUrl={review.user.avatarUrl}
        />))}
    </ul>
  );
}

export default ReviewsList;
