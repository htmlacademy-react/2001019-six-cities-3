import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import useMap from './useMap';
import leaflet from 'leaflet';
import {TOffer} from '../offer-card/types.ts';
import {Nullable} from 'vitest';

type TMapProps = {
  city : {
    title: string;
    lat: number;
    lng: number;
    zoom: number;
  };
   activeOffer: Nullable<TOffer>;
  offers: TOffer[];
}
function Map({city, offers, activeOffer}: TMapProps) :JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: '/img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: '/img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },{
            icon: activeOffer && offer.id === activeOffer.id ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer, currentCustomIcon, defaultCustomIcon]);

  return (
    <section
      className="map cities__map"
      style={{height: 'auto', width: '100%'}}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
