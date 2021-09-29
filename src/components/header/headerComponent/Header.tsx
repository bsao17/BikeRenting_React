import React, {ReactElement, useEffect, useState} from 'react';
import Carousel from "../carousel/Carousel";
import styleHeader from "./header.module.css";
import axios, {AxiosResponse} from "axios";

interface Article {
    id: string
    title: string
    content: string
}

const Header: React.FC = (props) => {
    const [articleContent, setArticleContent] = useState([])
    const [toggleWindow, setToggleWindow] = useState<Boolean>(false)

    /*HTTP Request on db.json API*/
    async function requestDb() {
        await axios.get("http://localhost:3000/articles")
            .then((r) => {setArticleContent(r.data)})
    }

    useEffect(()=> {
        requestDb()
    }, [toggleWindow])

    return (
        <div className={"card card-body m-4 bg-dark"} id={styleHeader.containerGlobal}>
            <Carousel/>
            <h1 className={"text-light text-center mt-5"}>Louer un vélo en 3 étapes</h1>
            <button
                onClick={()=>setToggleWindow(!toggleWindow)}
                className={toggleWindow ? "btn w-50 m-auto btn-danger" : "btn w-50 m-auto btn-success"}
            >
                {toggleWindow ? "Fermer" : "Ouvrir"}
            </button>
            <div className={" container row mt-5 m-auto"}>
                    {articleContent.map((window: Article) => {
                        console.log(window)
                        let windowElement: ReactElement = (
                            <div key ={window.id} className={"col-lg-4 col-md-6 col-sm-12"}>
                                <div className="card card-body my-2">
                                    <div className="card-header text-center text-dark fw-bold">
                                        <span className="h4 fw-bold ">{window.title}</span>
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