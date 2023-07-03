import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import BtnContainer from "../components/Home/BtnContainer";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isUnsafe: false,
            location: null
        };
    }
  
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            position => {
                const location = position;
                console.log(location.coords)
                this.setState({ location });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        //navigator.geolocation.watchPosition(onLocationActualization, onErrorLocation, options);
    }

  /*componentDidUpdate(){
    if(this.isUnsafe){
        console.log('entro aquii')
        navigator.geolocation.getCurrentPosition(
            position => {
                const location = position;
                console.log(location.coords)
                this.setState({ location });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }
  }*/
  
  

  render() {
    const toggle = () => {
      this.setState({ open: !this.state.open });
    };

    const handlePressHelp = () => {
        console.log(!this.state.isUnsafe)
        this.setState({ isUnsafe: !this.state.isUnsafe });
    };


    return (
      <View style={styles.mainView}>
        <Text style={styles.text}>Presioname si estas en peligro</Text>
        <BtnContainer></BtnContainer>
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
