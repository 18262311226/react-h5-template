import { useRef } from "react";
import {getOnlyKey} from "../utils";

// function getDefaultCanvas() {
//   return {
//     title: "未命名",
//     // 页面样式
//     style: {
//       width: 320,
//       height: 568,
//       backgroundColor: "#ffffff",
//       backgroundImage: "",
//       backgroundPosition: "center",
//       backgroundSize: "cover",
//       backgroundRepeat: "no-repeat",
//       // boxSizing: "content-box",
//     },
//     // 组件
//     cmps: [
//         {
//             key: getOnlyKey(),
//             desc: '文本',
//             value: '文本',
//             style: {
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: 100,
//                 height: 30,
//                 fontSize: 12,
//                 color: 'red'
//             }
//         }
//     ],
//   };
// }

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
    ],
  };

export default class Canvas {
    constructor (_canvas = defaultCanvas) {
        this.canvas = _canvas
        this.selectedCmpIndex = null
        this.listeners = []
    }

    //获取
    getCanvas = () => {
        return {...this.canvas}
    }

    setCanvas = (_canvas) => {
        Object.assign(this.canvas, _canvas);
        this.updateApp();
    };

    //获取组件
    getCanvasCmps = () => {
        return [...this.canvas.cmps]
    }
    //获取组件下标
    getSelectedCmpIndex = () => {
        return this.selectedCmpIndex
    }
    //获取当前下标组件
    getSelectedCmp = () => {
        const cmps = this.getCanvasCmps()

        return cmps[this.selectedCmpIndex]
    }
    //设置组件下标
    setSelectedCmpIndex = (index) => {
        if (this.selectedCmpIndex === index) {
            return
        }

        this.selectedCmpIndex = index

        this.updateApp()
    }
    // 新增组件
    addCmp = (_cmp) => {
        const cmp = {key: getOnlyKey(), ..._cmp}

        this.canvas.cmps.push(cmp)

        this.setSelectedCmpIndex(this.canvas.cmps.length - 1)

        this.updateApp()
    }

    updateApp = () => {
        this.listeners.forEach(lis => lis())
    }

    updateSelectedCmp = (newStyle = {}, newValue) => {
        const selectedCmp = this.getSelectedCmp()

        if (newStyle) {
            this.canvas.cmps[this.getSelectedCmpIndex()].style = {...selectedCmp.style, ...newStyle}
        }

        if (newValue != undefined) {
            this.canvas.cmps[this.getSelectedCmpIndex()].value = newValue 
        }

        this.updateApp()
    }

    updateCanvasStyle = (newStyle) => {
        this.canvas.style = {
            ...this.canvas.style,
            ...newStyle
        }

        this.updateApp()
    }

    subscribe = (listener) => {
        this.listeners.push(listener)

        return () => {
            this.listeners = this.listeners.filter(lis => lis !== listener)
        }
    }

    getPublicCanvas = () => {
        const obj = {
            getCanvas : this.getCanvas,
            getCanvasCmps: this.getCanvasCmps,
            addCmp: this.addCmp,
            getSelectedCmp: this.getSelectedCmp,
            getSelectedCmpIndex: this.getSelectedCmpIndex,
            setSelectedCmpIndex: this.setSelectedCmpIndex,
            updateSelectedCmp: this.updateSelectedCmp,
            updateCanvasStyle: this.updateCanvasStyle,
            subscribe: this.subscribe,
            setCanvas: this.setCanvas
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