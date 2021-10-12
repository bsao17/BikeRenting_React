import React from 'react';
import {Body, Header} from "./components/index"
import styleApp from "./App.module.scss"
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
