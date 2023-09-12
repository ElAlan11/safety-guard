import { useState, useRef, useEffect } from 'react';
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import { Point } from 'ol/geom';
import { Feature } from 'ol';
import marker_pin from '../assets/pin-de-ubicacion-p1.png';
import marker_pin_guest from '../assets/pin-de-ubicacion-p2.png';
import 'ol/ol.css';
import { ZoomToExtent, defaults as defaultControls } from 'ol/control'
import {
    Fill,
    Icon,
    Stroke,
    Style,
    Text
  } from 'ol/style.js';
import '../App.css'


const MapContent = ({ marker, markerHelp }) => {
  const [centre] = useState(marker.position);
  const [transformedCentre, setTransformedCentre] = useState(fromLonLat(centre));
  const [transformedCentreGuest, setTransformedCentreGuest] = useState(fromLonLat(markerHelp.position));

  // create state ref that can be accessed in OpenLayers onclick callback function
  const mapRef = useRef();
  const pointRef = useRef();
  const pointGuestRef = useRef();
  var point = ''
  var pointGuest = ''
  var feature = ''
  var featureGuest = ''
  var map = ''
  var featuresLayer = ''
  var vectorSource
  mapRef.current = map;
  pointRef.current = point;
  pointGuestRef.current = pointGuest;
  var iconStyle = new Style({
      image: new Icon({
          src: marker_pin,
      }),
  });

  var iconStyleGuest = new Style({
    image: new Icon({
        src: marker_pin_guest,
    }),
  });

  // initialize map on first render - logic formerly put into componentDidMount
  useEffect(() => {

      // Create a point
      point = new Point(transformedCentre);

      pointGuest = new Point(transformedCentreGuest);

      // points/lines/polygons are features that can be used in the vector layer
      feature = new Feature({ geometry: point, name: marker.title, });

      featureGuest = new Feature({ geometry: pointGuest, name: markerHelp.title, });

      feature.setStyle(iconStyle);
      featureGuest.setStyle(iconStyleGuest);

      // create vector source itself for the marker on the map
      vectorSource = new VectorSource({
          features: [feature, featureGuest],
      });

      // create and add vector source layer
      featuresLayer = new VectorLayer({
          source: vectorSource,
      });

      // create the initial view
      const initialView = new View({
          center: transformedCentre,
          zoom: 13,
      });
      // create map
      map = new Map({
          target: mapRef.current,
          layers: [
              new TileLayer({
                  source: new OSM(),
              }),
              featuresLayer,
          ],
          view: initialView,
          controls: defaultControls().extend([
            new ZoomToExtent({
              extent: [
                813079.7791264898, 5929220.284081122, 848966.9639063801,
                5936863.986909639,
              ],
            }),
          ]),
      });
      //setMap(locationMap);
      //setFeaturesLayer(initalFeaturesLayer);
  }, [marker, markerHelp]);

  // update map if user changes geo location
  useEffect(() => {
      console.log({markerHelp, marker})
      console.log(featuresLayer.getFeatures())
      var newTransformedCentre
      var newTransformedCentreGuest 

      if (marker.position) {
          newTransformedCentre = fromLonLat(marker.position);
      }
      if(markerHelp.position) {
          newTransformedCentreGuest = fromLonLat(markerHelp.position);
      }
      point.setCoordinates(fromLonLat(marker.position));
      pointGuest.setCoordinates(fromLonLat(markerHelp.position));
      feature.setGeometry(point);
      featureGuest.setGeometry(pointGuest);

      //console.log({point, pointGuest, newTransformedCentre, newTransformedCentreGuest});
      console.log({f: feature.getGeometry(), fg: featureGuest.getGeometry()});

      // set features to map
      featuresLayer.setSource(
          new VectorSource({
              features: [feature, featureGuest],
          })
      );

      map.setView(
          new View({
              center: newTransformedCentre,
              zoom: 13,
          })
      );

      /*vectorSource.clear();
      vectorSource = new VectorSource({
          features: [feature, featureGuest],
      });
      featuresLayer.setSource(vectorSource);
      //vectorSource.changed();
      vectorSource.refresh();

      console.log({featuresLayer, map});*/
      
  }, [marker, markerHelp]);

  // update map if features prop changes - logic formerly put into componentDidUpdate
    return (
        <div ref={mapRef} className="map-container"></div>
    );
}

export default MapContent;