import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import BtnContainer from "../components/Home/BtnContainer";
import Geolocation from 'react-native-geolocation-service';

const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
            title: 'Geolocation Permission',
            message: 'Can we access your location?',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
            },
        );
        console.log('granted', granted);
        if (granted === 'granted') {
            console.log('You can use Geolocation');
            return true;
        } else {
            console.log('You cannot use Geolocation');
            return false;
        }
    } catch (err) {
      return false;
    }
};

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isUnsafe: false,
            location: null
        };
    }

    /*componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            position => {
                const location_ = position;
                console.log(location_.coords)
                this.setState({ location: location_ });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        //navigator.geolocation.watchPosition(onLocationActualization, onErrorLocation, options);
    }*/
  
  

  render() {
    const toggle = () => {
      this.setState({ open: !this.state.open });
    };

    const handlePressHelp = () => {
        this.setState({ isUnsafe: !this.state.isUnsafe });
        getLocation();
    };

    const getLocation = () => {
        if(!this.state.isUnsafe){
            const result = requestLocationPermission();
            result.then(res => {
            console.log('res is:', res);
            if (res) {
                Geolocation.watchPosition(
                    position => {
                        console.log(position);
                        this.setState({ location: position });
                    },
                    error => {
                        // See error code charts below.
                        console.log(error.code, error.message);
                        this.setState({ location: null });
                    },
                    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
                )
            }
            });
        }else{
            Geolocation.stopObserving();
        }
        console.log(location);
    };


    return (
      <View style={styles.mainView}>
        <Text style={styles.text}>Presioname si estas en peligro</Text>
        <BtnContainer handlePressHelp={handlePressHelp}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    padding: 20
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 'bold'
  },
});
