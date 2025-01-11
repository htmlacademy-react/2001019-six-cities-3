import ReviewForm from '../review-form/review-form.tsx';
import {TReview} from '../review-item/types.ts';
import ReviewsList from '../review-list/review-list.tsx';

type TReviewsProps = {
  isAuth: boolean;
  reviews: TReview[];
  offerId: string;
}

function Reviews({isAuth, reviews, offerId}: TReviewsProps): JSX.Element {

  return (
    <>
      <ReviewsList reviews={reviews} />
      {isAuth && <ReviewForm offerId={offerId} />}
    </>
  );
}

export default Reviews;
