import React, {FunctionComponent} from 'react';
import styleBody from "./body.module.css"
import Map from "../map/Map";
import {useRecoilState} from "recoil";
import {backgroundState} from "../../../atoms/background";

const Body: FunctionComponent = () => {
    const[bg] = useRecoilState(backgroundState)
    return (
        <div className={styleBody.container}>
            <section className={"row w-100 m-auto"}>
                <div className={ bg ? "card card-body col-lg-4 col-md-4 col-sm m-2 bg-secondary" : "card card-body col-lg-4 col-md-4 col-sm m-2 bg-light"}>
                    <p className={bg ? "text-center text-light h2 " : "text-center h2"} id={styleBody.fontText}>Séléctionnez votre station sur la carte</p>
                    <Map/>
                </div>
                <div className={ bg ? "card card-body col-lg-4 col-md-4 col-sm m-2 bg-secondary" : "card card-body col-lg-4 col-md-4 col-sm m-2 bg-light"}>
                    <section className={"m-2"}>

                    </section>
                </div>
            </section>
        </div>
    );
}

export default Body;