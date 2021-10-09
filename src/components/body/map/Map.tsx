import React, {useEffect, useState} from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import axios from "axios";

const containerStyle = {
    width: '45vw',
    height: '90vh'
};

const center = {
    lat: 43.604652,
    lng: 1.444209
};


interface locationMarker {
    lat: number
    lng: number
}

interface stationProps {
    updateStation: Function
}

function Map({updateStation}: stationProps) {
    const [centerMarker, setCenterMarker] = useState<locationMarker[]>()

    function JcdecauxRequest() {
        axios.get(`https://api.jcdecaux.com/vls/v1/stations?contract=Toulouse&apiKey=e56f43cd9e4a4aa5260f59360a683fa28aaa4e6b`).then(
            (R) => {
                console.log(R.data)
                const stationsData = R.data
                setCenterMarker(stationsData)
            }
        )
    }

    useEffect(JcdecauxRequest, [])
    return (
        <LoadScript
            googleMapsApiKey={`${process.env.REACT_APP_API_KEY}`}
        >
            <div className={"m-auto"}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    {
                        centerMarker?.map((C) => {
                            //@ts-ignore
                            if (C["available_bikes"] === 0) {
                                //@ts-ignore
                                return (<Marker key={ C["address"] }
                                    //@ts-ignore
                                                position={ {lat: C["position"].lat, lng: C["position"].lng} }
                                                icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}/>)
                                //@ts-ignore
                            } else if (C["available_bikes"] <= 5) {
                                //@ts-ignore
                                return (<Marker onClick={() => { updateStation(C["address"], C["name"], C["available_bikes"]) }} key={C["address"]}
                                    //@ts-ignore
                                                position={{lat: C["position"].lat, lng: C["position"].lng}}
                                                icon={"http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"}/>)
                            } else {
                                //@ts-ignore
                                return (<Marker onClick={() => { updateStation(C["address"], C["name"], C["available_bikes"]) }} key={C["address"]}
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
    )

}

export default React.memo(Map)