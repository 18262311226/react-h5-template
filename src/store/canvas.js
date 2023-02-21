import { useRef } from "react";
import {getOnlyKey} from "../utils";

function getDefaultCanvas() {
  return {
    title: "未命名",
    // 页面样式
    style: {
      width: 320,
      height: 568,
      backgroundColor: "#ffffff",
      backgroundImage: "",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      // boxSizing: "content-box",
    },
    // 组件
    cmps: [
        {
            key: getOnlyKey(),
            desc: '文本',
            value: '文本',
            style: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: 100,
                height: 30,
                fontSize: 12,
                color: 'red'
            }
        }
    ],
  };
}

const defaultCanvas = {
    title: "未命名",
    // 页面样式
    style: {
      width: 320,
      height: 568,
      backgroundColor: "#ffffff",
      backgroundImage: "",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      // boxSizing: "content-box",
    },
    // 组件
    cmps: [
        {
            key: getOnlyKey(),
            desc: '文本',
            value: '文本',
            style: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: 100,
                height: 30,
                fontSize: 12,
                color: 'red'
            }
        }
    ],
  };

class Canvas {
    constructor (_canvas = defaultCanvas) {
        this.canvas = _canvas
    }

    //获取
    getCanvas = () => {
        return {...this.canvas}
    }

    //获取组件
    getCanvasCmps = () => {
        return [...this.canvas.cmps]
    }

    //设置
    setCanvas = (_canvas) => {
        Object.assign(this.canvas, _canvas)
    }

    getPublicCanvas = () => {
        const obj = {
            getCanvas : this.getCanvas,
            getCanvasCmps: this.getCanvasCmps
        }
        
        return obj
    }
}

export function useCanvas (canvas) {
    const canvasRef = useRef()

    if (!canvasRef.current) {
        if (canvas) {
            canvasRef.current = canvas
        }else {
            const canvas = new Canvas()

            canvasRef.current = canvas.getPublicCanvas()
        }
    }

    return canvasRef.current
}