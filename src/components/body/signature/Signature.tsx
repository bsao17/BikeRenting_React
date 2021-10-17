import React, {MutableRefObject, useRef} from 'react';


const canvasStyle = {
    width: "100%",
    height: "100%",
    border: "black 1px solid",
    borderRadius: "5px",
    backgroundColor: "white"
}

interface propsType {
    props: string
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