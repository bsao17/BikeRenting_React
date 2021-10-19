import React, {useEffect, useState} from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import {useRecoilState} from "recoil";
import {backgroundState} from "../../../atoms/background";
import axios from "axios";

/* map size */
const containerStyle = {
    width: '100vw',
    height: '90vh'
};
/*Container map*/
const containerMapLight = {
    width: "99%",
    margin: "auto",
    backgroundColor: "#505050",
    borderRadius: "5px"
}
const containerMapDark = {
    width: "99%",
    margin: "auto",
    backgroundColor: "black",
    borderRadius: "5px"
}
/* Google map center */
const center = {
    lat: 43.604652,
    lng: 1.444209
};

interface locationMarker {
    lat: number
    lng: number
}

/*Props Interface*/
interface stationProps {
    updateStation: Function
}

/*Component Map*/
function Map({updateStation}: stationProps) {
    const [bicycleStationMarker, setBicycleStationMarker] = useState<locationMarker[]>()
    const [bg] = useRecoilState(backgroundState)


    function JcdecauxRequest() {
        axios.get(`${process.env.REACT_APP_JCD_URL}`).then(
            (R) => {
                console.log(R.data)
                const stationsData = R.data
                setBicycleStationMarker(stationsData)
            }
        )
    }

    useEffect(JcdecauxRequest, [])
    return (
        <div style={bg ? containerMapDark : containerMapLight}>

            <LoadScript
                googleMapsApiKey={`${process.env.REACT_APP_API_KEY}`}
            >
                <div className={"d-flex justify-content-center align-items-center"}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={14}
                    >
                        {bicycleStationMarker?.map((C) => {
                            //@ts-ignore
                            if (C["available_bikes"] === 0) {
                                //@ts-ignore
                                return (<Marker key={C["address"]}
                                    //@ts-ignore
                                                position={{lat: C["position"].lat, lng: C["position"].lng}}
                                                icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}/>)
                                //@ts-ignore
                            } else if (C["available_bikes"] <= 5) {
                                //@ts-ignore
                                return (<Marker onClick={() => {
                                    //@ts-ignore
                                    updateStation(C["address"], C["name"], C["available_bikes"])
                                }}
                                    //@ts-ignore
                                                key={C["address"]}
                                    //@ts-ignore
                                                position={{lat: C["position"].lat, lng: C["position"].lng}}
                                                icon={"http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"}/>)
                            } else {
                                //@ts-ignore
                                return (<Marker onClick={() => {
                                    //@ts-ignore
                                    updateStation(C["address"], C["name"], C["available_bikes"])}} key={C["address"]}
                                    //@ts-ignore
                                                position={{lat: C["position"].lat, lng: C["position"].lng}}
                                                icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}/>)
                            }
                        })
                        }
                        <></>
                    </GoogleMap>
                </div>
            </LoadScript>
        </div>
    )

}

export default React.memo(Map)