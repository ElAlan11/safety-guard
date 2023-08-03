import { useParams } from "react-router-dom";
import Load from "../../components/Load";
import MapContent from "../../components/Map";
import { useEffect, useState } from "react";

const Content = () => {
    const {id} = useParams();
    let idWatcher = null;
    const [locationGuest, setLocationGuest] = useState(null);
    const data = {
        id: id,
        position: [-103.3933895, 20.6971379],
        title: 'Ultima ubicación de ',
    }

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(position) {
        console.log({position});
        const location = position.coords;
        let location_ = {
            position: [location.longitude, location.latitude],
            title: 'Tu ubicación',
        };
        console.log({location_});
        setLocationGuest(location_);
    };
      
    function errorLoc(err) {
    //En caso de que no esté activa la ubicación ponemos por default providencia
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, errorLoc, options);
            initWatcher();
        }else{
            console.log('El navegador no soporta geolocalización')
        }
    },[])

    const initWatcher = () => {
        console.log('iniciando')
        idWatcher = navigator.geolocation.watchPosition(success, errorLoc, options);
    }

    return (
        <>
            {
                id && data && locationGuest?
                (
                    <MapContent marker={data} markerHelp={locationGuest}/>
                ):
                (
                    <Load />
                )
            }
        </>
    );
}

export default Content;