import React, {useState} from "react";
import GoogleMapReact, {Coords} from 'google-map-react';
import styleMap from "./map.module.css"

const AnyReactComponent: Function = ({ text }: {text: Coords}) => <div>{text}</div>;

export default function Map(){
    const[lat, setLat] = useState(45.465020)
    const[lng, setLng] = useState(-0.739410)
    const defaultProps = {
        center: {
            lat: 45.46672,
            lng: -0.7167
        },
        zoom: 11
    };

    return (
        <div className={styleMap.map}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: `${process.env.REACT_APP_API_KEY}` }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={lat}
                    lng={lng}
                    text={<h1>🚲</h1>}
                />
            </GoogleMapReact>
        </div>
    );
}
