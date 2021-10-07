import React, { useEffect, useState} from 'react'
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

interface locationMarker {
    lat: number
    lng: number
}

function Map() {
    const[location, setLocation] = useState<locationMarker[]>()

    function requestMarker(){
        axios.get(`https://api.jcdecaux.com/vls/v1/stations?contract=Toulouse&apiKey=${process.env.REACT_APP_JCD_API_KEY}`)
            .then((response)=>{
                response.data.map((r: {lat:number, lng: number}[])=> {
                    setLocation(r)
                    console.log(r)
                    return location
                })
            })
    }

    const centerMarker = location

    useEffect(requestMarker , [])
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
                    {centerMarker!.map((C: locationMarker)=>{
                        return (<Marker key={C.lat} position={C} icon={"https://www.icone-png.com/png/39/38961.png"}/>)

                    })}
                    <></>
                </GoogleMap>
            </div>
        </LoadScript>
    )
}

export default React.memo(Map)