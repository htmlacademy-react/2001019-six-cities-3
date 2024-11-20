import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import useMap from './useMap';
import leaflet, {LayerGroup} from 'leaflet';
import {TCity, TOffer} from '../offer-card/types.ts';
import {Nullable} from 'vitest';
import {URL_MARKER_ACTIVE, URL_MARKER_DEFAULT} from './const.ts';

type TMapProps = {
  city: TCity;
  mapType: 'offer' | 'cities';
  activeOffer?: Nullable<TOffer>;
  offers?: TOffer[];
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

function Map({city, mapType, offers, activeOffer}: TMapProps) :JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city});
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  let mapClass = 'map cities__map';

  if (mapType === 'offer') {
    mapClass = 'map offer__map';
  }

  useEffect(() => {
    if (map) {
      map.setView([city.lat, city.lng], city.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);

  useEffect(() => {
    if (offers && map) {
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
  }, [map, offers, activeOffer]);

  return (
    <section
      className={mapClass}
      style={{height: (mapType === 'offer' ? '500px' : 'auto'), width: '100%'}}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
