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
import { Transform } from 'ol/transform';
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
  // Transform the centre into something openlayers understands
      // set intial state
  /*const [ map, setMap ] = useState()
  const [ featuresLayer, setFeaturesLayer ] = useState()
  const [centre] = useState(marker.position);
  const [point, setPoint] = useState(
    new Point(fromLonLat(marker.position))
  );
  const [point2, setPoint2] = useState(
    new Point(fromLonLat(markerHelp.position))
  );
  const [feature, setFeature] = useState();
  const [transformedCentre] = useState(fromLonLat(centre));
  const [newMarker, setNewMarker] = useState(
    new Feature({
      geometry: point,
      name: marker.title,
    })
  );

  const [markerHelper, setMarkerHelper] = useState(
    new Feature({
      geometry: point2,
      name: markerHelp.title,
    })
  )

  const iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: marker_pin
    }),
  });

  const labelStyle = new Style({
    text: new Text({
      font: '12px Calibri,sans-serif',
      overflow: true,
      fill: new Fill({
        color: '#000'
      }),
      stroke: new Stroke({
        color: '#fff',
        width: 3
      }),
      offsetY: -12
    })
  });

  var style = [iconStyle, labelStyle];
  
  // pull refs
  const mapElement = useRef()
  
  // create state ref that can be accessed in OpenLayers onclick callback function
  const mapRef = useRef()
  mapRef.current = map

  // initialize map on first render - logic formerly put into componentDidMount
  useEffect( () => {

    // create and add vector source layer
    const initalFeaturesLayer = new VectorLayer({
      source: new VectorSource({
        features: [newMarker, markerHelper],
      }),
      style: function(feature) {
        labelStyle.getText().setText(feature.get('name'));
        return style;
      }
    })

    // create map
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        initalFeaturesLayer
      ],
      view: new View({
        center: fromLonLat(marker.position),
        zoom: 13
      }),
      controls: defaultControls().extend([
        new ZoomToExtent({
          extent: [
            813079.7791264898, 5929220.284081122, 848966.9639063801,
            5936863.986909639,
          ],
        }),
      ])
    })

    // save map and vector layer references to state
    setMap(initialMap)
    setFeaturesLayer(initalFeaturesLayer)

  },[])

  useEffect(() => {
    console.log("Detected change in User geolocation");

      if (marker.position) {
          var newTransformedCentre = fromLonLat(marker.position);
      }
      if (map != null) {
        point.setCoordinates(newTransformedCentre);
        feature.setGeometry(point);

        map.setView(
            new View({
                center: newTransformedCentre,
                zoom: 17,
            })
        );

        // set features to map
        featuresLayer.setSource(
            new VectorSource({
                features: [feature],
            })
        );
    }
  },[marker, markerHelp, marker.position])*/

  const [map, setMap] = useState();
  const [centre] = useState(marker.position);
  const [featuresLayer, setFeaturesLayer] = useState();
  const [point, setPoint] = useState();
  const [pointGuest, setPointGuest] = useState();
  const [feature, setFeature] = useState();
  const [featureGuest, setFeatureGuest] = useState();
  const [transformedCentre] = useState(fromLonLat(centre));
  const [transformedCentreGuest] = useState(fromLonLat(markerHelp.position));

  // create state ref that can be accessed in OpenLayers onclick callback function
  //  https://stackoverflow.com/a/60643670
  const mapRef = useRef();
  mapRef.current = map;

  // initialize map on first render - logic formerly put into componentDidMount
  useEffect(() => {

      // Create a point
      var point = new Point(transformedCentre);
      setPoint(point);

      var pointGuest = new Point(transformedCentreGuest);
      setPointGuest(pointGuest);

      // points/lines/polygons are features that can be used in the vector layer
      var feature = new Feature({
          geometry: point,
          name: marker.title,
      });

      var featureGuest = new Feature({
        geometry: pointGuest,
        name: markerHelp.title,
      });

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

      feature.setStyle(iconStyle);
      featureGuest.setStyle(iconStyleGuest);
      setFeature(feature);
      setFeatureGuest(featureGuest);

      // create vector source itself for the marker on the map
      var vectorSource = new VectorSource({
          features: [feature, featureGuest],
      });

      // create and add vector source layer
      const initalFeaturesLayer = new VectorLayer({
          source: vectorSource,
      });

      // create the initial view
      const initialView = new View({
          center: transformedCentre,
          zoom: 13,
      });

      // create map
      const locationMap = new Map({
          target: mapRef.current,
          layers: [
              new TileLayer({
                  source: new OSM(),
              }),

              initalFeaturesLayer,
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
      setMap(locationMap);
      setFeaturesLayer(initalFeaturesLayer);
  }, []);

  // update map if user changes geo location
  useEffect(() => {
      console.log({markerHelp, marker})

      if (marker.position) {
          var newTransformedCentre = fromLonLat(marker.position);
      }
      if(markerHelp.position) {
          var newTransformedCentreGuest = fromLonLat(markerHelp.position);
      }

      if (map != null) {
        point.setCoordinates(newTransformedCentre);
        pointGuest.setCoordinates(newTransformedCentreGuest);
        feature.setGeometry(point);
        featureGuest.setGeometry(pointGuest);

        map.setView(
            new View({
                center: newTransformedCentre,
                zoom: 13,
            })
        );

        // set features to map
        featuresLayer.setSource(
            new VectorSource({
                features: [feature, featureGuest],
            })
        );
      }
  }, [marker.position, markerHelp.position]);

  // update map if features prop changes - logic formerly put into componentDidUpdate
    return (
        <div ref={mapRef} className="map-container"></div>
    );
}

export default MapContent;