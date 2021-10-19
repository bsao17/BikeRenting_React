import React, {useRef} from 'react';


const canvasStyle = {
    width: "auto",
    borderRadius: "5px",
    backgroundColor: "white",
    margin: "5px"
}



function Signature() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const canvasCtx = canvasRef.current?.getContext('2d')

    return (
        <canvas ref={canvasRef} style={canvasStyle} >

        </canvas>
    );

}

export default Signature;