import React from 'react';
import Header from "./components/header/headerComponent/Header";
import Body from "./components/body/bodyComponent/Body";
import styleApp from "./App.module.css"
import {useRecoilState} from "recoil";
import {backgroundState} from "./atoms/background";

function App() {
    const[bg, setBg] = useRecoilState(backgroundState)
    console.log(bg)
    return (
        <div className={bg ? "bg-dark" : ""}>
            <button className={bg ? styleApp.light : styleApp.dark} onClick={()=>setBg(!bg)}>
                { bg ? "🌞" : "🌜"}
            </button>
            <Header/>
            <Body/>
        </div>
    );
}

export default App;
