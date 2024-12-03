import {TReview} from '../review-item/types.ts';
import ReviewItem from '../review-item/review-item.tsx';

type TReviewsProps = {
  reviews: TReview[];
}

function ReviewsList({reviews}: TReviewsProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review : TReview, index: number) => (
          (index < 3 && <ReviewItem
            key={review.id}
            rating={review.rating}
            date={review.date}
            comment={review.comment}
            name={review.user.name}
            avatarUrl={review.user.avatarUrl}
          />)))}
      </ul>
    </>
  );
}

export default ReviewsList;
