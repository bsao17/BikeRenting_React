import React, {useEffect, useState} from 'react';
import Carousel from "../carousel/Carousel";
import styleHeader from "./header.module.css";
import axios from "axios";


const Header: React.FC = (props) => {
    const [articleContent, setArticleContent] = useState<string>("")
    const [toggleWindow, setToggleWindow] = useState<Boolean>(false)
    const [toggleWindowTwo, setToggleWindowTwo] = useState<Boolean>(false)
    const [toggleWindowThree, setToggleWindowThree] = useState<Boolean>(false)

    interface Articles {
        id: number
        content: string
        title: string
    }

    async function requestDb(I: number) {
        await axios.get<Articles[]>("http://localhost:3000/articles")
            .then(
                (r) => {
                    setArticleContent(r.data[I].content)
                })
    }

    return (
        <div className={"card card-body m-4 bg-dark"} id={styleHeader.containerGlobal}>
            <Carousel/>
            <h1 className={"text-light text-center mt-5"}>Louer un vélo en 3 étapes</h1>
            <div className={" container row mt-5 m-auto"}>
                <div className={"col-lg-4 col-md-6 col-sm-12"}>
                    <div className="card card-body my-2">
                        <div className="card-header text-center text-dark fw-bold">
                            Etape <span className="h4 fw-bold bg-success rounded-pill p-1 text-light">1</span>
                        </div>
                        <div className="card-text m-2">
                            {toggleWindow && articleContent}
                        </div>

                        {/*Button One open windows under the carousel*/}
                        <button onClick={() => {
                            requestDb(0)
                            setToggleWindow(!toggleWindow);
                            setToggleWindowTwo(false)
                            setToggleWindowThree(false)
                        }} className={toggleWindow ? "btn btn-sm btn-danger" : "btn btn-sm btn-success"}>
                            {toggleWindow ? "Fermer" : "Ouvrir"}
                        </button>
                    </div>
                </div>

                <div className={"col-lg-4 col-md-6 col-sm"}>
                    <div className="card card-body my-2">
                        <div className="card-header text-center text-dark fw-bold">
                            Etape <span className={"h4 fw-bold bg-warning rounded-pill p-1 text-light"}>2</span>
                        </div>
                        <div className="card-text m-2">
                            {toggleWindowTwo && articleContent}
                        </div>

                        {/*Button Two open windows under the carousel*/}
                        <button onClick={() => {
                            requestDb(1)
                            setToggleWindowTwo(!toggleWindowTwo)
                            setToggleWindow(false)
                            setToggleWindowThree(false)
                        }} className={toggleWindowTwo ? "btn btn-sm btn-danger" : "btn btn-sm btn-success"}>
                            {toggleWindowTwo ? "Fermer" : "Ouvrir"}
                        </button>
                    </div>
                </div>

                <div className={"col-lg-4 col-md-6 col-sm"}>
                    <div className="card card-body my-2">
                        <div className="card-header text-center text-dark fw-bold">
                            Etape <span className={"h4 fw-bold bg-danger rounded-pill p-1 text-light"}>3</span>
                        </div>
                        <div className="card-text m-2">
                            {toggleWindowThree && articleContent}
                        </div>

                        {/*Button Three open windows under the carousel*/}
                        <button onClick={() => {
                            requestDb(2)
                            setToggleWindowThree(!toggleWindowThree)
                            setToggleWindow(false)
                            setToggleWindowTwo(false)
                        }} className={toggleWindowThree ? "btn btn-sm btn-danger" : "btn btn-sm btn-success"}>
                            {toggleWindowThree ? "Fermer" : "Ouvrir"}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;