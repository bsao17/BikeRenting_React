import React, {useEffect, useRef} from 'react';


const canvasStyle = {
    width: "auto",
    borderRadius: "5px",
    backgroundColor: "white",
    margin: "5px"
}

function Signature() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const ctx = canvasRef.current?.getContext('2d')

    function screenShow(eventMouse: React.MouseEvent){
        console.log(eventMouse.clientX)
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    useEffect(()=>{screenShow}, [])

    return (
        <canvas
            ref={canvasRef}
            style={canvasStyle}
            onMouseMove={ screenShow }
        >

        </canvas>
    );

}

export default Signature;