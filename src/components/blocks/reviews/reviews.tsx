import ReviewForm from '../review-form/review-form.tsx';
import {TReview} from '../review-item/types.ts';
import ReviewItem from '../review-item/review-item.tsx';

type TReviewsProps = {
  isAuth: boolean;
  reviews: TReview[];
}

function Reviews({isAuth, reviews}: TReviewsProps): JSX.Element {
  return (
    <>
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
      {isAuth && <ReviewForm />}
    </>
  );
}

export default Reviews;
