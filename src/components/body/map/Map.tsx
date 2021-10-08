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
    const [centerMarker, setCenterMarker] = useState(centerMarkerOne)
    function JcdecauxRequest (){
        axios.get(`${process.env.REACT_APP_JCD_URL}`).then(
            (R) => {
                console.log(R.data)
                const stationsData =  R.data
                setCenterMarker(stationsData)
            }
        )
    }
    useEffect(()=>{JcdecauxRequest()}, [])
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
                        centerMarker.map((C) => {
                            if(!isNaN(C.lat)){
                                return (<Marker key={C.lat} position={{lat: C.lat, lng: C.lng}} icon={"https://www.icone-png.com/png/39/38981.png"}/>)
                            }else{
                                console.log("not a number yet")
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