import {useAppSelector} from '@/hooks';
import {getActiveCity} from '@/store/app';

function EmptyList(): JSX.Element {
  const activeCity = useAppSelector(getActiveCity);

  return (
    <>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {activeCity.title}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </>
  );
}

export default EmptyList;
