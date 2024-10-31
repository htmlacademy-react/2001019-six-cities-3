import ReviewsList from '../reviews-list/reviews-list.tsx';
import ReviewForm from '../review-form/review-form.tsx';
import {TReview} from '../review-item/types.ts';

type TReviewsProps = {
  isAuth: boolean;
  reviews: TReview[];
}

function Reviews({isAuth, reviews}: TReviewsProps): JSX.Element {
  return (
    <>
      <ReviewsList reviews={reviews} />
      {isAuth && <ReviewForm />}
    </>
  );
}

export default Reviews;
