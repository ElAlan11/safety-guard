import React,{useState,useEffect} from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import * as Location from 'expo-location';


export default function Maps() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({latitude: location.coords.latitude,longitude:location.coords.longitude });//{latitude: location.coords.latitude,longitude:location.coords.longitude }
    })();
  }, []);
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = console.log(JSON.stringify(location));
  }
  const exampleMarkers = [
    {
      latitude: 20.714183,
      longitude: -103.410526,
    },
    {
      latitude: 20.710183,
      longitude: -103.410526,
    },
    {
      latitude: 20.734183,
      longitude: -103.410526,
    },
  ];
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 20.66682,
          longitude: -103.39182,
          latitudeDelta: 0.04,
          longitudeDelta: 0.1,
        }}
      >
        <Marker key ={0} coordinate={location}></Marker>
        {exampleMarkers.map((item,index) => {
          return <Marker key = {index} coordinate={item}></Marker>;
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
