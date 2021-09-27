import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/header/headerComponent/Header";
import Body from "./components/body/bodyComponent/Body";
import axios, {AxiosPromise} from "axios";

function App() {
    const[request, setRequest] = useState("")

    const requestDb = (I: number)=>{
        const recupRequest: AxiosPromise<string[]> = axios.get("http://localhost:3000/authors")
        recupRequest.then((res)=> { console.log(res)
            setRequest(res.data[I])
                }
            )
        return recupRequest;
        }

        useEffect(()=>{requestDb(1)}, [])
    console.log(request)
    return (
        <div className="App">
            <Header title={"Mode d'emploi"} content={request}/>
            <Body/>

        </div>
    );
}

export default App;
