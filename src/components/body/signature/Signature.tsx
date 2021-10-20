import React, {MouseEventHandler, useEffect, useRef} from 'react';


const canvasStyle = {
    width: "auto",
    borderRadius: "5px",
    backgroundColor: "white",
    margin: "5px"
}
interface canvasEvent {
    event: MouseEventInit
}


function Signature() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const ctx = canvasRef.current?.getContext('2d')

    function screenShow(e: MouseEvent){
        console.log(e.clientX)
    }

    useEffect(()=>{
        //@ts-ignore
        screenShow(canvasRef)
    }, [])

    return (
        <canvas ref={canvasRef} style={canvasStyle}>

        </canvas>
    );

}

export default Signature;