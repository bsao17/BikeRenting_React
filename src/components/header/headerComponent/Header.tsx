import React, {FunctionComponent, ReactElement, useCallback, useEffect, useState} from 'react';
import {Carousel} from "../../index";
import styleHeader from "./header.module.scss";
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

    const requestHttp = useCallback(
        function requestDb() {
            axios.get(`${process.env.REACT_APP_URL}`)
                .then((r) => {
                    setArticleContent(r.data);
                    console.log(r.data)
                })
        }
        , [])
    useEffect(()=>requestHttp(), [requestHttp])
    return (
        <div className={bg ? styleHeader.containerDark : styleHeader.containerLight} id={styleHeader.container} >
            <img className={styleHeader.logo} src={"images/logo.png"} alt="Logo JCDecaux"/>
            <Carousel/>
            <h1 className={"text-light text-center gx-5 mt-5"} id={styleHeader.fontText}>Louer un vélo en 3 étapes</h1>
            <button
                onClick={()=>setToggleWindow(!toggleWindow)}
                className={toggleWindow ? styleHeader.closeButton : styleHeader.openButton}
            >
                {toggleWindow ? "OFF" : "ON"}
            </button>
            <div className={" container row g-2  m-auto"}>

                {/*Mapping "article Content" for create three window elements*/}
                    {articleContent.map((window: Article) => {
                        let windowElement: ReactElement = (
                            <div key ={window.id} className={"col-lg-4 col-md-6 col-sm-12"}>
                                <div className={bg ? "card card-body mb-4 bg-secondary" : "card card-body mb-4"}>
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