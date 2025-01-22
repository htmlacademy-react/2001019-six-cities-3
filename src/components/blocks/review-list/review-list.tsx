import {TReview} from '../review-item/types.ts';
import ReviewItem from '../review-item/review-item.tsx';

type TReviewsProps = {
  reviews: TReview[];
}

function ReviewsList({reviews}: TReviewsProps): JSX.Element {
  const cutReviews = reviews.slice(0, 10);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {cutReviews.map((review : TReview) => (
          <ReviewItem
            key={review.id}
            rating={review.rating}
            date={review.date}
            comment={review.comment}
            name={review.user.name}
            avatarUrl={review.user.avatarUrl}
          />))}
      </ul>
    </>
  );
}

export default ReviewsList;
