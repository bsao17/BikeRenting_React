import React, {useState} from "react";
import GoogleMapReact, {Coords} from 'google-map-react';

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
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%', boxShadow: "black 5px 5px 10px" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCArclYf3mWJW9FH-IsP8XMdFn-Ha3SleM" }}
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
