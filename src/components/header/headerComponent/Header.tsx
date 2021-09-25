import React, {useState} from 'react';
import Carousel from "../carousel/Carousel";
import styleHeader from "./header.module.css";

type props = {
    title: string
    content: string
}

function Header({title, content}: props) {

    const [article, setArticle] = useState(false)
    const [articleTwo, setArticleTwo] = useState(false)
    const [articleThree, setArticleThree] = useState(false)

    return (
        <div className={"card card-body m-4 bg-dark"} id={styleHeader.containerGlobal}>
            <Carousel/>
            <div className={" container row mt-5 m-auto"}>
                <div className={"col-lg-4 col-md-6 col-sm-12"}>
                    <div className="card card-body my-2">
                        <div className="card-header text-center">{title}</div>
                        <div className="card-text">
                            {article && content}
                        </div>
                        <button onClick={() => {
                            setArticle(!article)
                        }} className={"btn btn-sm btn-success"}>Open
                        </button>
                    </div>
                </div>

                <div className={"col-lg-4 col-md-6 col-sm"}>
                    <div className="card card-body my-2">
                        <div className="card-header">Title two</div>
                        <div className="card-text">
                            {articleTwo && "article du blog"}
                        </div>
                        <button onClick={() => {
                            setArticleTwo(!articleTwo)
                        }} className={"btn btn-sm btn-success"}>Open
                        </button>
                    </div>
                </div>

                <div className={"col-lg-4 col-md-6 col-sm"}>
                    <div className="card card-body my-2">
                        <div className="card-header">Title three</div>
                        <div className="card-text">
                            {articleThree && "article du blog"}
                        </div>
                        <button onClick={() => {
                            setArticleThree(!articleThree)
                        }} className={"btn btn-sm btn-success"}>Open
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;