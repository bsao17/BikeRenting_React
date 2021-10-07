import React, {useState} from 'react'
import {GoogleMap, LoadScript, Marker, MarkerProps} from '@react-google-maps/api';
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

const centerMarkerOne: locationMarker[] = [
    {
        lat: 43.604652,
        lng: 1.444209
    },
    {
        lat: 43.624652,
        lng: 1.444209
    }
]

interface locationMarker {
    lat: number
    lng: number
}

function Map() {
    const[centerMarker, setCenterMarker] = useState(centerMarkerOne)



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
                    {
                        centerMarker.map((C)=> {
                            return (<Marker position={C} icon={"https://www.icone-png.com/png/39/38981.png"}/>)
                        })
                    }
                    <></>
                </GoogleMap>
            </div>
        </LoadScript>
    )
}

export default React.memo(Map)