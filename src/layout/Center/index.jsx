import { useCanvasByContext } from '../../store/hook'
import Cmp from '../../components/Cmp/index'
import styles from './index.less'
import { useCallback, useEffect } from 'react'

export default function Center (props) {
    const canvas = useCanvasByContext()
    const canvasData = canvas.getCanvas()
    const { style, cmps } = canvasData

    const onDrop = useCallback((e) => {
        const endX = e.pageX
        const endY = e.pageY

        const start = e.dataTransfer.getData('text').split(',')

        const disX = endX - start[0]
        const disY = endY - start[1]

        const selectedCmp = canvas.getSelectedCmp()
        const oldStyle = selectedCmp.style

        const top = oldStyle.top + disY
        const left = oldStyle.left + disX

        canvas.updateSelectedCmp({top, left})
    }, [])

    const allowDrop = useCallback((e) => {
        e.preventDefault()
    }, [])

    useEffect(() => {
        document.getElementById("center").addEventListener('click', () => {
            canvas.setSelectedCmpIndex(-1)
        })
    }, [])

    const selectedIndex = canvas.getSelectedCmpIndex()
    return <div id="center" className={styles.main}>
        <div className={styles.canvas} style={{...canvasData.style, backgroundImage: `url(${canvasData.style.backgroundImage})`}} onDrop={onDrop} onDragOver={allowDrop}>
            {cmps.map((cmp, index) => (
                <Cmp key={cmp.key} cmp={cmp} selected={selectedIndex === index} index={index}/>
            ))}
        </div>
    </div>
}