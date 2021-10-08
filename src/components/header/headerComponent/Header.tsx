import React, {FunctionComponent, ReactElement, useEffect, useState} from 'react';
import Carousel from "../carousel/Carousel";
import styleHeader from "./header.module.css";
import axios from "axios";
import {useRecoilState} from "recoil";
import {backgroundState} from "../../../atoms/background";

interface Article {
    id: string
    title: string
    content: string
}

const Header: FunctionComponent = (props) => {
    const [articleContent, setArticleContent] = useState([])
    const [toggleWindow, setToggleWindow] = useState<Boolean>(false)
    const[bg] = useRecoilState(backgroundState)

    /*HTTP Request on API*/
    async function requestDb() {
        await axios.get(`${process.env.REACT_APP_URL}`)
            .then((r) => {
                setArticleContent(r.data);
                console.log(r.data)
            })
    }

    useEffect(()=> {
        requestDb()
    }, [toggleWindow])

    return (
        <div className={bg ? styleHeader.containerDark : styleHeader.containerLight} id={styleHeader.container} >
            <img className={styleHeader.logo} src={"images/logo.png"} alt="Logo JCDecaux"/>
            <Carousel/>
            <h1 className={"text-light text-center mt-5"} id={styleHeader.fontText}>Louer un vélo en 3 étapes</h1>
            <button
                onClick={()=>setToggleWindow(!toggleWindow)}
                className={toggleWindow ? styleHeader.closeButton : styleHeader.openButton}
            >
                {toggleWindow ? "Fermer les étapes" : "Lire les étapes"}
            </button>
            <div className={" container row mt-5 m-auto"}>

                {/*Mapping "article Content" for create three window elements*/}
                    {articleContent.map((window: Article) => {
                        let windowElement: ReactElement = (
                            <div key ={window.id} className={"col-lg-4 col-md-6 col-sm-12"}>
                                <div className={bg ? "card card-body my-2 bg-secondary" : "card card-body my-2"}>
                                    <div className={ bg ? "card-header bg-dark text-center text-light fw-bold " : "card-header bg-light text-center fw-bold"}>
                                        <span id={styleHeader.containerTitle} className="h4 fw-bold ">{window.title}</span>
                                    </div>
                                    <div className={ bg ? "card-text m-2 text-light" : "card-text m-2"}>
                                        {toggleWindow && window.content}
                                    </div>
                                </div>
                            </div>
                        )
                        return windowElement
                    })}

            </div>
        </div>
    );
}

export default Header;