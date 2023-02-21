import { useContext } from "react";
import { CanvasContext } from "../Context";

export function useCanvasData () {
    const canvas = useContext(CanvasContext)

    return canvas.getCanvas()
}

export function useCanvasCmps () {
    const canvas = useContext(CanvasContext)

    return canvas.getCanvasCmps()
}