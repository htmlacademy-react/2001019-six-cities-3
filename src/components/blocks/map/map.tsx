import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import useMap from './useMap';
import leaflet, {LayerGroup} from 'leaflet';
import {TOffer} from '../offer-card/types.ts';
import {URL_MARKER_ACTIVE, URL_MARKER_DEFAULT} from './const.ts';
import {useAppSelector} from '@/hooks';
import {clsx} from 'clsx';
import {TCity} from '@/const.tsx';
import {getActiveOfferId} from '@/store/app';
import {Nullable} from 'vitest';

type TMapProps = {
  city: TCity;
  offers?: TOffer[];
  className?: string;
  currentOfferId: Nullable<string>;
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

function Map({city, offers, className, currentOfferId}: TMapProps) :JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city});
  const markerLayerGroup = useRef<LayerGroup>(leaflet.layerGroup());
  const activeOfferId = useAppSelector(getActiveOfferId);

  if (!currentOfferId) {
    currentOfferId = activeOfferId;
  }

  useEffect(() => {
    if (map) {
      map.setView([city.lat, city.lng], city.zoom);
    }
  }, [city, map]);

  if (map) {
    markerLayerGroup.current.addTo(map);
    markerLayerGroup.current.clearLayers();
  }

  useEffect(() => {
    if (offers && map) {
      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });

      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },{
            icon: offer.id === currentOfferId ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }

    return () => {
      markerLayerGroup.current.clearLayers();
    };
  }, [map, offers, currentOfferId]);

  return (
    <section
      className={clsx('map', className)}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
