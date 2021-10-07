import React, {useState} from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import styleMap from "./map.module.css"
import axios from "axios";

const containerStyle = {
    width: '45vw',
    height: '90vh'
};

const center = {
    lat: 43.604652,
    lng: 1.444209
};

const centerMarker = [
    {
    lat: 43.604652,
    lng: 1.444209,
    },
    {
    lat: 43.614660,
    lng: 1.444209,
    }
];


function Map() {
    const[Lat, setLat] = useState<number>()
    const[Lng, setLng] = useState<number>()

    function requestMarker(){
        axios.get(`https://api.jcdecaux.com/vls/v1/stations?contract=Toulouse&apiKey=${process.env.REACT_APP_JCD_API_KEY}`)
            .then((response)=>{
                response.data.map((r: any)=> {
                    return (
                        <Marker position={r.data["position"]}
                                icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}/>
                    )
                })
            })
    }


    console.log(Lat, Lng)

    return (
        <LoadScript
            googleMapsApiKey= {`${process.env.REACT_APP_API_KEY}`}
        >
            <div className={"m-auto"}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={11}
                >
                    { /* Child components, such as markers, info windows, etc. */ }
                    {centerMarker.map((C)=>{
                        return (<Marker key={C.lat} position={C} icon={"https://www.icone-png.com/png/39/38961.png"}/>)

                    })}
                    <></>
                </GoogleMap>
            </div>
        </LoadScript>
    )
}

export default React.memo(Map)