import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import useMap from './useMap';
import leaflet, {LayerGroup} from 'leaflet';
import {TOffer} from '../offer-card/types.ts';
import {URL_MARKER_ACTIVE, URL_MARKER_DEFAULT} from './const.ts';
import {useAppSelector} from '../../../hooks';
import {clsx} from 'clsx';
import {TCity} from '../../../const.tsx';

type TMapProps = {
  city: TCity;
  offers?: TOffer[];
  className?: string;
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

function Map({city, offers, className}: TMapProps) :JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city});
  const markerLayerGroup = useRef<LayerGroup>(leaflet.layerGroup());
  const activeOfferId = useAppSelector((state) => state.activeOfferId);

  useEffect(() => {
    if (map) {
      map.setView([city.lat, city.lng], city.zoom);
      markerLayerGroup.current.addTo(map);
      markerLayerGroup.current.clearLayers();
    }
  }, [city, map]);

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
            icon: activeOfferId && offer.id === activeOfferId ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }

  }, [map, offers, activeOfferId]);

  return (
    <section
      className={clsx('map', className)}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
