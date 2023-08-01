import { useParams } from "react-router-dom";
import Load from "../../components/Load";
import MapContent from "../../components/Map";
import { useEffect, useState } from "react";

const Content = () => {
    const {id} = useParams();
    const [locationGuest, setLocationGuest] = useState([-103.383734, 20.697058]);
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
        const location = position.coords;
        setLocationGuest([location?.longitude, location?.latitude]);
    };
      
    function errorLoc(err) {
    //En caso de que no esté activa la ubicación ponemos por default providencia
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    useEffect(()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, errorLoc, options);
    }else{
        console.log('El navegador no soporta geolocalización')
    }
    },[navigator.geolocation])

    return (
        <>
            {
                id && data?
                (
                    <MapContent marker={data} markerHelp={{position: locationGuest, title: 'Tu ubicación'}}/>
                ):
                (
                    <Load />
                )
            }
        </>
    );
}

export default Content;