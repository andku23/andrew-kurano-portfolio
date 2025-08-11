'use client'

import * as PlayCanvas from "./playcanvasgame";
import Playcanvas from "@/playcanvas/playcanvas";
import {useEffect} from "react";

export default function PlayCanvasGame() {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
    useEffect(() => {
        Playcanvas.start();
    }, []);
    return (
        <div className="w-full h-[60vw]">
            <canvas id = "application" className={'w-full h-full'}></canvas>
        </div>
    );
}