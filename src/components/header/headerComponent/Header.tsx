import React, {ReactElement, useEffect, useState} from 'react';
import Carousel from "../carousel/Carousel";
import styleHeader from "./header.module.css";
import axios from "axios";

interface Article {
    id: string
    title: string
    content: string
}
console.log(process.env.URL)
const Header: React.FC = (props) => {
    const [articleContent, setArticleContent] = useState([])
    const [toggleWindow, setToggleWindow] = useState<Boolean>(false)

    /*HTTP Request on db.json API*/
    async function requestDb() {
        await axios.get("https://bikerentingapi.herokuapp.com/etape")
            .then((r) => {setArticleContent(r.data); console.log(r.data)})
    }

    useEffect(()=> {
        requestDb()
    }, [toggleWindow])

    return (
        <div className={"card card-body m-4 bg-dark"} >
            <img className={"w-25 d-block m-auto"} src={"images/logo.png"} alt="Logo JCDecaux"/>
            <Carousel/>
            <h1 className={"text-light text-center mt-5"}>Louer un vélo en 3 étapes</h1>
            <button
                onClick={()=>setToggleWindow(!toggleWindow)}
                className={toggleWindow ? "btn w-25 m-auto mt-4 btn-danger rounded-pill" : "btn w-25 m-auto mt-4 btn-success"}
            >
                {toggleWindow ? "Fermer" : "Ouvrir"}
            </button>
            <div className={" container row mt-5 m-auto"}>
                    {articleContent.map((window: Article) => {
                        let windowElement: ReactElement = (
                            <div key ={window.id} className={"col-lg-4 col-md-6 col-sm-12"}>
                                <div className="card card-body">
                                    <div className="card-header text-center text-dark fw-bold">
                                        <span id={styleHeader.containerTitle} className="h4 fw-bold ">{window.title}</span>
                                    </div>
                                    <div className="card-text m-2">
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