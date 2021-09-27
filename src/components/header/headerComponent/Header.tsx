import React, {useEffect, useState} from 'react';
import Carousel from "../carousel/Carousel";
import styleHeader from "./header.module.css";
import axios from "axios";


const Header: React.FC = (props) => {
    const[articleContentOne, setArticleContentOne] = useState("")
    const[articleContentTwo, setArticleContentTwo] = useState("")
    const[articleContentThree, setArticleContentThree] = useState("")

    async function requestDb(I: number){
        await axios.get("http://localhost:3000/articles")
            .then(
                (r)=> {
                    setArticleContentOne(r.data[0].content);
                }
            ).catch(err => console.log(err))
    }

    async function requestDbTwo(I: number){
        await axios.get("http://localhost:3000/articles")
            .then(
                (r)=> {
                    setArticleContentTwo(r.data[1].content);
                }
            ).catch(err => console.log(err))
    }

    async function requestDbThree(I: number){
        await axios.get("http://localhost:3000/articles")
            .then(
                (r)=> {
                    setArticleContentThree(r.data[2].content);
                }
            ).catch(err => console.log(err))
    }

    const [article, setArticle] = useState(false)
    const [articleTwo, setArticleTwo] = useState(false)
    const [articleThree, setArticleThree] = useState(false)
    useEffect(()=>{
        requestDb(0);
        requestDbTwo(1);
        requestDbThree(2);
    }, [] )

    console.log(articleContentOne)

    return (
        <div className={"card card-body m-4 bg-dark"} id={styleHeader.containerGlobal}>
            <Carousel/>
            <div className={" container row mt-5 m-auto"}>
                <div className={"col-lg-4 col-md-6 col-sm-12"}>
                    <div className="card card-body my-2">
                        <div className="card-header text-center text-dark fw-bold">
                            {"I"}
                        </div>
                        <div className="card-text m-2">
                            {article && articleContentOne}
                        </div>
                        <button onClick={() => {
                            setArticle(!article)
                        }} className={article ? "btn btn-sm btn-danger" : "btn btn-sm btn-success"}>
                            {article ? "Fermer" : "Ouvrir"}
                        </button>
                    </div>
                </div>

                <div className={"col-lg-4 col-md-6 col-sm"}>
                    <div className="card card-body my-2">
                        <div className="card-header text-center text-dark fw-bold">
                            II
                        </div>
                        <div className="card-text m-2">
                            {articleTwo && articleContentTwo}
                        </div>
                        <button onClick={() => {
                            setArticleTwo(!articleTwo)
                        }} className={articleTwo ? "btn btn-sm btn-danger" : "btn btn-sm btn-success"}>
                            {articleTwo ? "Fermer" : "Ouvrir"}
                        </button>
                    </div>
                </div>

                <div className={"col-lg-4 col-md-6 col-sm"}>
                    <div className="card card-body my-2">
                        <div className="card-header text-center text-dark fw-bold">
                            III
                        </div>
                        <div className="card-text m-2">
                            {articleThree && articleContentThree}
                        </div>
                        <button onClick={() => {
                            setArticleThree(!articleThree)
                        }} className={articleThree ? "btn btn-sm btn-danger" : "btn btn-sm btn-success"}>
                            {articleThree ? "Fermer" : "Ouvrir"}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;