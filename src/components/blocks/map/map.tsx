import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import useMap from './useMap';
import leaflet, {LayerGroup} from 'leaflet';
import {TCity, TOffer} from '../../../types.ts';
import {URL_MARKER_ACTIVE, URL_MARKER_DEFAULT} from './const.ts';
import {useAppSelector} from '../../../hooks';
import {clsx} from "clsx";

type TMapProps = {
  city: TCity,
  mapType: 'offer' | 'cities',
  offers?: TOffer[],
  className?: string,
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
  const activeOffer = useAppSelector((state) => state.activeOffer);

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
          map.removeLayer(layer)
        }
      })

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
      className={clsx('map', className)}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
