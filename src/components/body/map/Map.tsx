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

function Map() {
    const [centerMarker, setCenterMarker] = useState<locationMarker[]>()
    function JcdecauxRequest (){
        axios.get(`https://api.jcdecaux.com/vls/v1/stations?contract=Toulouse&apiKey=e56f43cd9e4a4aa5260f59360a683fa28aaa4e6b`).then(
            (R) => {
                console.log(R.data)
                const stationsData =  R.data
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
                    zoom={11}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    {
                        centerMarker?.map((C) => {
                            //@ts-ignore
                            console.log(C["position"])
                            //@ts-ignore
                            return (<Marker key={C.lat} position={{lat: C["position"].lat, lng: C["position"].lng}} icon={"https://www.icone-png.com/png/39/38981.png"}/>)
                        })
                    }
                    <></>
                </GoogleMap>
            </div>
        </LoadScript>
    )

}

export default React.memo(Map)