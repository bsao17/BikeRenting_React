import React, {FunctionComponent, useState} from 'react';
import styleBody from "./body.module.css"
import {Map} from "../../index"
import {useRecoilState} from "recoil";
import {backgroundState} from "../../../atoms/background";


const Body: FunctionComponent = () => {
    const [bg] = useRecoilState(backgroundState)
    const [address, setAddress] = useState("")
    const [nameStation, setNameStation] = useState("")
    const [bicycle, setBicycle] = useState("")

    {/*child HTTP request from API JCDecaux*/
    }
    const childReq = (A: string, N: string, B: string): any => {
        setAddress(A)
        setNameStation(N)
        setBicycle(B)
    }
    return (
        <div className={styleBody.container}>
            <section className={"row w-100 m-auto"}>
                <div
                    className={bg ? "card card-body col-lg-4 col-md-4 col-sm m-2 bg-secondary" : "card card-body col-lg-4 col-md-4 col-sm m-2 bg-light"}>
                    <p className={bg ? "text-center text-light h2 " : "text-center h2"}
                       id={styleBody.fontText}>Séléctionnez votre station sur la carte</p>

                    {/* Child component loop*/}
                    <Map updateStation={childReq}/>

                </div>
                <div
                    className={bg ? "card card-body col-lg-4 col-md-4 col-sm m-2 bg-secondary" : "card card-body col-lg-4 col-md-4 col-sm m-2 bg-light"}>
                    <section className={"m-2"}>
                        <p className={bg ? "text-center text-light h2 " : "text-center h2"}
                           id={styleBody.fontText}>Informations et réservation</p>
                        <form className={"form-control"} id={styleBody.form}>
                            <div className={"d-flex flex-column"}>
                                <label htmlFor="station">Station</label>
                                <input className={"form-control"} type="text" defaultValue={nameStation}
                                       id={"station"}/>
                            </div>
                            <div className={"d-flex flex-column"}>
                                <label htmlFor="address">Adresse</label>
                                <input className={"form-control"} type="text" id={"address"} defaultValue={address}
                                       name={"address"}/>
                            </div>
                            <div className={"d-flex flex-column"}>
                                <label htmlFor="cycle">Vélos disponibles</label>
                                <input className={"form-control"} type="text" id={"cycle"} defaultValue={bicycle}
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

                    </section>
                </div>
            </section>
        </div>
    );
}

export default Body;