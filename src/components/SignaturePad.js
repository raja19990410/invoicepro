import React, { useRef, useEffect } from 'react';

function SignaturePad({setimage,setImagesign}) {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const isDrawing = useRef(false);

    useEffect(() => {
        if (canvasRef.current) {
            canvasRef.current.width = canvasRef.current.clientWidth;
            canvasRef.current.height = canvasRef.current.clientHeight;
            ctxRef.current = canvasRef.current.getContext('2d');
            ctxRef.current.strokeStyle = 'black';
            ctxRef.current.lineWidth = 2;
        }
    }, []);

    const handleMouseDown = (e) => {
        if (ctxRef.current) {
            isDrawing.current = true;
            ctxRef.current.beginPath();
            ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        }
    };

    const handleMouseMove = (e) => {
        if (isDrawing.current && ctxRef.current) {
            ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            ctxRef.current.stroke();
        }
    };

    const handleMouseUp = () => {
        isDrawing.current = false;
        if (ctxRef.current) {
            ctxRef.current.closePath();
        }
    };

    const clearSignature = () => {
        if (ctxRef.current) {
            ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
    };

    const saveSignature = () => {
        if (canvasRef.current) {
            const signatureData = canvasRef.current.toDataURL();
            setImagesign(signatureData)
        }
    };

    return (
        <div>
            <canvas
                ref={canvasRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                style={{ border: '1px solid black' }}
            />
            <br />
            <button onClick={clearSignature}>Clear</button>
            <button onClick={saveSignature}>Save</button>
        </div>
    );
}

export default SignaturePad;