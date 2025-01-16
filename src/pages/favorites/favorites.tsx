import {TOffer} from '@/components/blocks/offer-card/types.ts';
import OfferCard from '../../components/blocks/offer-card/offer-card.tsx';
import Layout from '../../components/layout/layout.tsx';
import {useAppSelector} from '@/hooks';
import {getFavorites} from '@/store/offer-data';
interface ICityOffers {
  [key: string]: TOffer[];
}

function Favorites(): JSX.Element {
  const offers = useAppSelector(getFavorites);
  const cityOffers : ICityOffers = {};

  offers.map((offerItem) => {
    if (!cityOffers[offerItem.city.name]) {
      cityOffers[offerItem.city.name] = [];
    }

    return cityOffers[offerItem.city.name].push(offerItem);
  });

  return (
    <Layout page={'favorites'}>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                Object.keys(cityOffers).map((city) => (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {
                        cityOffers[city].map((cityOffer) => (
                          <OfferCard
                            key={cityOffer.id}
                            image={cityOffer.previewImage}
                            isPremium={cityOffer.isPremium}
                            price={cityOffer.price}
                            rating={cityOffer.rating}
                            title={cityOffer.title}
                            type={cityOffer.type}
                            id={cityOffer.id}
                            cardType='favorite'
                            isFavorite
                          />
                        ))
                      }
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Favorites;
