import {generatePath, Link} from 'react-router-dom';
import { clsx } from 'clsx';
import Badge from '../../ui/badge/badge.tsx';
import Bookmark from '../../ui/bookmark/bookmark.tsx';
import {AppRoute, getRatingPercent} from '@/const.tsx';
import {memo} from 'react';

type PlaceCardProps = {
  image: string;
  isPremium: boolean;
  price: number;
  rating: number;
  title: string;
  type: string;
  id: string;
  cardType: 'favorite' | 'main' | 'near';
  onHover?: (offerId: string | null) => void;
}

const classes = {
  main: {
    containerClass: 'cities__card',
    wrapperClass: 'cities__image-wrapper',
    infoClass: '',
  },
  favorite: {
    containerClass: 'favorites__card',
    wrapperClass: 'favorites__image-wrapper',
    infoClass: 'favorites__card-info',
  },
  near: {
    containerClass: 'near-places__card',
    wrapperClass: 'near-places__image-wrapper',
    infoClass: '',
  },
};

const imgSize = {
  main: {
    width: 260,
    height: 200,
  },
  favorite: {
    width: 150,
    height: 110,
  },
  near: {
    width: 260,
    height: 200,
  },
};

function OfferCard({id, price, rating, title, type, onHover, image, isPremium, cardType}: PlaceCardProps): JSX.Element {
  const cardClasses = classes[cardType];
  const cardSize = imgSize[cardType];
  const handleMouseEnter = () => onHover?.(id);
  const handleMouseOff = () => onHover?.(null);

  return (
    <article
      className={clsx(cardClasses.containerClass, 'place-card')}
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOff}
    >
      { isPremium && (<Badge badgeText={'Premium'}/>) }
      <div className={clsx(cardClasses.wrapperClass, 'place-card__image-wrapper')}>
        <Link to={generatePath(AppRoute.Offer, {id})}>

          <img
            className="place-card__image"
            src={image}
            width={cardSize.width}
            height={cardSize.height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={clsx(cardClasses.infoClass, 'place-card__info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark offerId={id} cardType={'main'}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingPercent(Math.round(rating))}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        {/*<h2 className="place-card__name">*/}
        {/*  {title}*/}
        {/*</h2>*/}
        <Link to={generatePath(AppRoute.Offer, {id})} className="place-card__name">
          {title}
        </Link>
        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

export default memo(OfferCard);
