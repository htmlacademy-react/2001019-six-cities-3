import {TReview} from '../review-item/types.ts';
import ReviewItem from '../review-item/review-item.tsx';
import {useAppSelector} from '@/hooks';
import {getIsCommentsDataLoading} from '@/store/offer-data';
import Loading from '@/pages/loading/loading.tsx';

type TReviewsProps = {
  reviews: TReview[];
}

function ReviewsList({reviews}: TReviewsProps): JSX.Element {
  const cutReviews = reviews.slice(0, 10);
  const isCommentsDataLoading = useAppSelector(getIsCommentsDataLoading);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      {isCommentsDataLoading && <Loading />}
      {!isCommentsDataLoading && (
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
        </ul>)}
    </>
  );
}

export default ReviewsList;
