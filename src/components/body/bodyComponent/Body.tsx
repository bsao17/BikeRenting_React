import React from 'react';
import styleBody from "./body.module.css"

function Body(props: any) {
    return (
        <div className={styleBody.container}>
            <section className={"row w-100 m-auto"}>
                <div className="card card-body col-lg-4 col-md-4 col-sm m-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, vero?</p>
                </div>
                <div className="card card-body col-lg-4 col-md-4 col-sm m-2">
                    <p className={"m-2"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, vero?</p>
                </div>
            </section>
        </div>
    );
}

export default Body;