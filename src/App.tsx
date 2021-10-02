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
            <button onClick={()=>setBg(!bg)}>dark mode</button>
            <Header/>
            <Body/>
        </div>
    );
}

export default App;
