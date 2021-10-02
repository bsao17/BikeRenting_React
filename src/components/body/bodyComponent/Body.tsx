import React, {FunctionComponent, ReactElement, ReactNode, useState} from 'react';
import styleBody from "./body.module.css"
import Map from "../map/Map";

const Body: FunctionComponent = () => {
    return (
        <div className={styleBody.container}>
            <section className={"row w-100 m-auto"}>
                <div className="card card-body col-lg-4 col-md-4 col-sm m-2">
                    <p className={"text-center h2 "} id={styleBody.fontText}>Séléctionnez votre station sur la carte</p>
                    <Map/>
                </div>
                <div className="card card-body col-lg-4 col-md-4 col-sm m-2">
                    <section className={"m-2"}>

                    </section>
                </div>
            </section>
        </div>
    );
}

export default Body;