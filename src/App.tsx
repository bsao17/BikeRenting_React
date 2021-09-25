import React from 'react';
import './App.css';
import Header from "./components/header/headerComponent/Header";
import Body from "./components/body/bodyComponent/Body";

function App() {
    return (
        <div className="App">
            <Header title={"Mode d'emploi"} content={"contenu texte"}/>
            <Body/>

        </div>
    );
}

export default App;
