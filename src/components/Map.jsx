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
import marker_pin_p2 from '../assets/pin-de-ubicacion-p2.png';
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
  console.log({ marker, markerHelp })
  // Transform the centre into something openlayers understands
      // set intial state
  const [ map, setMap ] = useState()
  const [ featuresLayer, setFeaturesLayer ] = useState()
  const [centre] = useState(marker.position);
  const [point, setPoint] = useState();
  const [feature, setFeature] = useState();
  const [transformedCentre] = useState(fromLonLat(centre));
  const [newMarker, setNewMarker] = useState(
    new Feature({
      geometry: new Point(fromLonLat(marker.position)),
      name: marker.title,
    })
  );

  const [markerHelper, setMarkerHelper] = useState(
    new Feature({
      geometry: new Point(fromLonLat(markerHelp.position)),
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
  //  https://stackoverflow.com/a/60643670
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

  },[newMarker, markerHelper])

  useEffect(() => {
    if(marker){
      setNewMarker(
        new Feature({
          geometry: new Point(fromLonLat(marker.position)),
          name: marker.title,
        })
      )
    }
    if(markerHelp){
      setMarkerHelper(
        new Feature({
          geometry: new Point(fromLonLat(markerHelp.position)),
          name: markerHelp.title,
        })
      )
    }
  },[marker, markerHelp, marker.position])

  // update map if features prop changes - logic formerly put into componentDidUpdate
    return (
        <div ref={mapElement} className="map-container"></div>
    );
}

export default MapContent;