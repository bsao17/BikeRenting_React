import React, {FunctionComponent, useState} from 'react';
import styleBody from "./body.module.scss"
import {Map} from "../../index"
import {useRecoilState} from "recoil";
import {backgroundState} from "../../../atoms/background";
import Signature from "../signature/Signature";


const Body: FunctionComponent = () => {
    const [bg] = useRecoilState(backgroundState)
    const [stationAddress, setStationAddress] = useState<string>()
    const [nameStation, setNameStation] = useState<string>()
    const [bicycleAvailable, setBicycleAvailable] = useState<string>()

    /*child HTTP request from API JCDecaux*/
    const stationProps = (A: string, N: string, B: string): void => {
        setStationAddress(A)
        setNameStation(N)
        setBicycleAvailable(B)
    }
    return (
        <div className={styleBody.container}>
            <section className={"row w-100 m-auto"}>
                {/*Map window*/}
                <Map updateStation={stationProps}/>

                {/*Left Window*/}
                <div
                    className={bg ? "card card-body col-lg-4 col-md-4 col-sm m-2 bg-secondary" : "card card-body col-lg-4 col-md-4 col-sm m-2 bg-light"}>
                    <p className={bg ? "text-center text-light h2 " : "text-center h2"}
                       id={styleBody.fontText}>Informations et Réservation</p>
                    <form className={"form-control"} id={styleBody.form}>
                        <div className={"d-flex flex-column"}>
                            <label htmlFor="station">Station</label>
                            <input className={"form-control"} type="text" defaultValue={nameStation}
                                   id={"station"}/>
                        </div>
                        <div className={"d-flex flex-column"}>
                            <label htmlFor="address">Adresse</label>
                            <input className={"form-control"} type="text" id={"address"} defaultValue={stationAddress}
                                   name={"address"}/>
                        </div>
                        <div className={"d-flex flex-column"}>
                            <label htmlFor="cycle">Vélos disponibles</label>
                            <input className={"form-control"} type="text" id={"cycle"} defaultValue={bicycleAvailable}
                                   name={"cycle"}/>
                        </div>
                        <div className={"d-flex flex-column"}>
                            <label htmlFor="lastname">Votre Nom</label>
                            <input className={"form-control"} type="text" id={"lastname"} name={"lastname"}
                                   required/>
                        </div>
                        <div className={"d-flex flex-column"}>
                            <label htmlFor="firstname">Votre Prénom</label>
                            <input className={"form-control"} type="text" id={"firstname"} name={"firstname"}
                                   required/>
                        </div>
                        <input className={"btn btn-sm btn-success mt-2 mb-1"} type="submit" value={"Réserver"}/>
                    </form>
                </div>

                {/*Right Window*/}
                <div
                    className={bg ? "card card-body col-lg-4 col-md-4 col-sm m-2 bg-secondary" : "card card-body col-lg-4 col-md-4 col-sm m-2 bg-light"}>
                    <section className={"m-2"}>
                        <p className={bg ? "text-center text-light h2 " : "text-center h2"}
                           id={styleBody.fontText}>Validation</p>
                    </section>
                    <Signature/>
                </div>
            </section>
        </div>
    );
}
export default Body;