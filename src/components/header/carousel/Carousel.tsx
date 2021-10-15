import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousel = () => {
    return (
        <div className={"col-lg-10 col-md-12 col-sm p-3 bg-secondary m-auto"}>
            <OwlCarousel className='owl-theme' loop margin={5} autoWidth={true}>
                <div className='item'>
                    <img src={"./images/velib.jpg"} alt=""/>
                </div>
                <div className='item'>
                    <img src={"./images/velib2.jpg"} alt=""/>
                </div>
                <div className='item'>
                    <img src={"./images/velib3.jpg"} alt=""/>
                </div>
                <div className='item'>
                    <img src={"./images/velib4.jpg"} alt=""/>
                </div>
                <div className='item'>
                    <img src={"./images/velib5.jpg"} alt=""/>
                </div>
                <div className='item'>
                    <img src={"./images/velib6.jpg"} alt=""/>
                </div>
            </OwlCarousel>;
        </div>
    );
};

export default Carousel;