import {ChangeEvent, FormEvent, Fragment, useRef, useState} from 'react';
import {RATINGS, ReviewLength} from './const.tsx';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {postReviewAction} from '../../../store/api-actions.ts';
import {getIsReviewLoading} from '../../../store/offer-data/offer-data.selectors.ts';

function ReviewForm({offerId}: {offerId: string}): JSX.Element {
  const initialState = {rating: 0, review: ''};
  const [review, setReview] = useState(initialState);
  const reviewRef = useRef<HTMLTextAreaElement | null>(null);
  const ratingRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const isReviewLoading = useAppSelector(getIsReviewLoading);
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setReview({...review, [name]: value});
  };
  const isInvalid = review.review.length < ReviewLength.Min || review.rating === 0 || review.review.length > ReviewLength.Max;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (reviewRef && reviewRef.current && ratingRef && ratingRef.current) {
      dispatch(postReviewAction({
        comment: reviewRef.current.value,
        rating: Number.parseInt(ratingRef.current.value, 10),
        offerId: offerId
      }));
      evt.currentTarget.reset();
      setReview(initialState);
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map(({value, label}) => (
          <Fragment key={value + label}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleChange}
              ref={ratingRef}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={label}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
        defaultValue={''}
        ref={reviewRef}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set {' '}
          <span className="reviews__star">rating </span>
          and describe your stay with at least {' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button"
          type="submit"
          disabled={isInvalid || isReviewLoading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
