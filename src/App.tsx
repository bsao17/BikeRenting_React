import React from 'react';
import './App.css';
import Header from "./components/header/headerComponent/Header";
import Body from "./components/body/bodyComponent/Body";
import {useRecoilState} from "recoil";
import {backgroundState} from "./atoms/background";

function App() {
    const[bg, setBg] = useRecoilState(backgroundState)
    console.log(bg)
    return (
        <div className={bg ? "bg-dark" : ""}>
            <button className={bg ? "btn btn-light my-2 mx-4 rounded-circle" : "btn btn-dark my-2 mx-4 rounded-circle"} onClick={()=>setBg(!bg)}>
                { bg ? "Light" : "Dark"}
            </button>
            <Header/>
            <Body/>
        </div>
    );
}

export default App;
