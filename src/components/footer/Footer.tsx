import React from "react";
import styleFooter from "./footer.module.scss"


export default function Footer(){
    return(
       <div className={"row w-100 bg-dark text-light text-center"}>
           <div className="row" id={styleFooter.logo}>
               <img src={"images/logo.png"} alt=""/>
               <code className={"text-light"}><i className="far fa-copyright"/> 2021 Bruno Mehddeb</code>
           </div>
           <div className="row">
               <div className="col-lg-4 col-md-4 col-sm-12">
                   <h5 className={styleFooter.title}>Documents</h5>
                   <ul className={styleFooter.list}>
                       <li className={styleFooter.listDot}>First</li>
                       <li className={styleFooter.listDot}>Second</li>
                       <li className={styleFooter.listDot}>Thirst</li>
                   </ul>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-12">
                   <h5 className={styleFooter.title}>Conditions</h5>
                   <ul className={styleFooter.list}>
                       <li className={styleFooter.listDot}>First</li>
                       <li className={styleFooter.listDot}>Second</li>
                       <li className={styleFooter.listDot}>Thirst</li>
                   </ul>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-12">
                   <h5 className={styleFooter.title}>Plus</h5>
                   <ul className={styleFooter.list}>
                       <li className={styleFooter.listDot}>First</li>
                       <li className={styleFooter.listDot}>Second</li>
                       <li className={styleFooter.listDot}>Thirst</li>
                   </ul>
               </div>
           </div>
       </div>
    )
}