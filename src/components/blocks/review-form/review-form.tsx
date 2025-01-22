import {ChangeEvent, FormEvent, Fragment, useState} from 'react';
import {RATINGS, ReviewLength} from './const.tsx';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {fetchCommentsAction, getIsReviewLoading} from '@/store/offer-data';
import {postReviewAction} from '@/store/user/user.api-actions.ts';

const INITIAL_STATE = {rating: '0', review: ''};

function ReviewForm({offerId}: {offerId: string}): JSX.Element {
  const [formState, setReview] = useState(INITIAL_STATE);
  const dispatch = useAppDispatch();
  const isReviewLoading = useAppSelector(getIsReviewLoading);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setReview({...formState, [name]: value});
  };

  const clearReviewForm = () => {
    dispatch(fetchCommentsAction({id: offerId}));
    setReview(INITIAL_STATE);
  };

  const isInvalid = formState.review.length < ReviewLength.Min || formState.rating === '0' || formState.review.length > ReviewLength.Max;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(postReviewAction({
      comment: formState.review,
      rating: Number.parseInt(formState.rating, 10),
      offerId: offerId,
      clearReviewForm: clearReviewForm
    }));
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
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleChange}
              checked={value === Number.parseInt(formState.rating, 10)}
              disabled={isReviewLoading}
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
        value={formState.review}
        disabled={isReviewLoading}
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
