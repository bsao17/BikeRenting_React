import React from 'react';
import styleCarousel from "./carousel.module.scss"

const Carousel = () => {
    return (
        <div id={styleCarousel.container} className={"row"}>
            <div id={styleCarousel.leftWindow} className="col-lg-4 col-md-4-col-sm border rounded-start">

            </div>
            <div id={styleCarousel.middleWindow} className="col-lg-4 col-md-4-col-sm border">

            </div>
            <div id={styleCarousel.rightWindow} className="col-lg-4 col-md-4-col-sm border rounded-end">
            </div>
        </div>
    );
};

export default Carousel;