import React, {useEffect, useRef} from 'react';

/**
 * canvas css
 */
const canvasStyle = {
    width: "auto",
    borderRadius: "5px",
    backgroundColor: "white",
    margin: "5px"
}

function Signature() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const ctx:  CanvasRenderingContext2D | null | undefined = canvasRef.current?.getContext('2d')

    /**
     *
     * @param eventMouse
     */
    function screenShow(eventMouse: React.MouseEvent){
        console.log(eventMouse.clientX)
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    useEffect(()=>{screenShow}, [])

    return (
        <canvas
            ref={canvasRef}
            style={canvasStyle}
            onClick={ screenShow }
        >

        </canvas>
    );

}

export default Signature;