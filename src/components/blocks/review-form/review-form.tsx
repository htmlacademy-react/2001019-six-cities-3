import {ChangeEvent, Fragment, useState} from 'react';
import {RATINGS, ReviewLength} from './const.tsx';

function ReviewForm(): JSX.Element {
  const [review, setReview] = useState({rating: 0, review: ''});
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setReview({...review, [name]: value});
  };
  const isValid = review.review.length < ReviewLength.Min || review.rating === 0 || review.review.length > ReviewLength.Max;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
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
          disabled={isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
