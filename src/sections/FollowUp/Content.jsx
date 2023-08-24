import { useParams } from "react-router-dom";
import Load from "../../components/Load";
import MapContent from "../../components/Map";
import { useEffect, useState } from "react";
import { useGetIncidentQuery, useGetIncidentRefreshMutation } from "../../store/serviceApi";
import { Stack, Text } from "@chakra-ui/react";

const Content = () => {
    const {incident_id, contact_id} = useParams();
    const {data: data_incident, error, isLoadind} = useGetIncidentQuery({incident_id, contact_id});
    const [incidentRefresh] = useGetIncidentRefreshMutation();
    //console.log({incident_id, contact_id, data_incident, error, isLoadind});
    let idWatcher = null;
    const [locationGuest, setLocationGuest] = useState(null);
    const [locationUser, setLocationUser] = useState(null);

    useEffect (()=>{
        if(data_incident){
            //console.log({data_incident});
            const data = {
                id: incident_id,
                position: [data_incident.latitude, data_incident.longitude],
                title: 'Ultima ubicación de tu contacto',
            }
            setLocationUser(data);
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success, errorLoc, options);
                initWatcher();
            }else{
                console.log('El navegador no soporta geolocalización')
            }
    
            const intervalId = setInterval(refreshLocationUser, 5000);
          
            return () => clearInterval(intervalId);
        }
    },[data_incident])

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(position) {
        //console.log({position});
        const location = position.coords;
        let location_ = {
            position: [location.longitude, location.latitude],
            title: 'Tu ubicación',
        };
        //console.log({location_});
        setLocationGuest(location_);
    };
      
    function errorLoc(err) {
    //En caso de que no esté activa la ubicación ponemos por default providencia
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    const initWatcher = () => {
        console.log('iniciando')
        idWatcher = navigator.geolocation.watchPosition(success, errorLoc, options);
    }

    const refreshLocationUser = () => {
        incidentRefresh({incident_id, contact_id})
        .then((response)=>{
            if(response){
                const data = {
                    id: incident_id,
                    position: [response.data.latitude, response.data.longitude],
                    title: 'Ultima ubicación de tu contacto',
                }
                setLocationUser(data);
            }else{
                clearInterval();
            }
        }).catch((error)=>{
            console.log(error);
        })
    }

    return (
        <>
            {
                incident_id && locationUser && locationGuest?
                (
                    <MapContent marker={locationUser} markerHelp={locationGuest}/>
                ):
                (
                    !isLoadind && error ?
                        <Stack 
                            mt={24}
                            textAlign={'center'}
                        >
                            <Text
                                fontSize={'2xl'}
                                fontWeight={700}
                            >
                                Lo sentimos, ocurrio un error
                            </Text>
                            <Text>
                                No fue posible obtener la informacíón de esté incidente.
                            </Text>
                        </Stack>
                    :
                    <Load />
                )
            }
        </>
    );
}

export default Content;