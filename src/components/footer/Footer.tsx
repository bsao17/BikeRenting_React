import React from "react";
import {backgroundState} from "../../atoms/background"
import {useRecoilState} from "recoil";
import styleFooter from "./footer.module.scss"


export default function Footer(){
    const [bg] = useRecoilState(backgroundState)
    return(
       <div className={bg ? "row w-100 bg-secondary text-light text-center" : "row w-100 bg-dark text-light text-center"}>
           <div className="row" id={styleFooter.logo}>
               <img src={"images/logo.png"} alt=""/>
               <code className={"text-light"}>Copyright 2021 bruno Mehddeb</code>
           </div>
           <div className="row">
               <div className="col-lg-4 col-md-4 col-sm-12">
                   <h5 className={styleFooter.title}>plus</h5>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-12">
                   <h5 className={styleFooter.title}>Document</h5>
                   <ul>
                       <li>First</li>
                       <li>Second</li>
                       <li>Thirst</li>
                   </ul>

               </div>
               <div className="col-lg-4 col-md-6 col-sm-12">
                   <div className={styleFooter.title}>Conditions</div>
                   column three
               </div>
           </div>
       </div>
    )
}