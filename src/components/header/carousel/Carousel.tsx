import React from 'react';
import styleCarousel from "./carousel.module.css"

const Carousel = () => {
    return (
        <div className={styleCarousel.container}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"/>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"/>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"/>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={"images/velib.jpg"} className={styleCarousel.image} alt="..."/>
                        <div className="carousel-caption d-none d-md-block bg-dark rounded-pill text-light">
                            <h5><span className={"h4"}>1</span> : Séléctionner Votre Station</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={"images/velib2.jpg"} className={styleCarousel.image} alt="..."/>
                        <div className="carousel-caption d-none d-md-block bg-dark rounded-pill text-light ">
                            <h5><span className={"h4"}>2</span> : Réserver Votre Vélo</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={"images/velib3.jpg"} className={styleCarousel.image} alt="..."/>
                        <div className="carousel-caption d-none d-md-block bg-dark rounded-pill text-light">
                            <h5 className={""}><span className={"h4"}>3</span> : Récupérer et Circuler</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;