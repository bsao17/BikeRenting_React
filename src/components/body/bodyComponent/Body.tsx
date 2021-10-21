import React, {FunctionComponent, useState} from 'react';
import styleBody from "./body.module.scss"
import {Map, Signature} from "../../index"
import {useRecoilState} from "recoil";
import {backgroundState} from "../../../atoms/background";
import Footer from "../../footer/Footer";


const Body: FunctionComponent = () => {
    const [bg] = useRecoilState(backgroundState)
    const [stationAddress, setStationAddress] = useState<string>()
    const [nameStation, setNameStation] = useState<string>()
    const [bicycleAvailable, setBicycleAvailable] = useState<string>()
    /**
     *
     * @param A like Address
     * @param N like Name
     * @param B like Bicycle
     */
    const stationProps = (A: string, N: string, B: string): void => {
        setStationAddress(A)
        setNameStation(N)
        setBicycleAvailable(B)
    }
    return (
        <div>
            {/*Map window*/}
            <Map updateStation={stationProps}/>
            <section className={"d-flex flex-column justify-content-center align-items-center w-100"}>

                {/*Left Window*/}
                <div
                    className={bg ? "text-center text-light h2 my-2 bg-secondary w-75 rounded" : "text-center text-light h2 my-2 bg-secondary w-75 rounded"}>
                    <p
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
                            <label>Signature </label>
                        <Signature/>
                        </div>
                        <input className={"btn btn-sm btn-success mt-2 mb-1"} type="submit" value={"Réserver"}/>
                    </form>
                </div>

                <Footer/>
            </section>
        </div>
    );
}
export default Body;