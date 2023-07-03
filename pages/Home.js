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

    const handleChangeView = (view) => {
        const navigation_ = this.context;
        navigation_.navigate(view, {});
    }

    const handleLogin = () => {
        const navigation_ = this.context;
        navigation_.navigate('Home', {});
    }

    /*const onLocationActualization = position => {
        // Aquí ya tenemos la ubicación ;)
        console.log(position)
        const location = position;
        this.setState({ location });
    }

    const onErrorLocation = err => {
        console.log("Error obteniendo ubicación: ", err);
    }

    const options = {
        enableHighAccuracy: true, // Alta precisión
        maximumAge: 0, // No queremos caché
        timeout: 5000 // Esperar solo 5 segundos
    };*/

    //idWatcher = navigator.geolocation.watchPosition(onLocationActualization, onErrorLocation, options);

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
