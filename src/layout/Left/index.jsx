import { useState, useEffect } from 'react'
import styles from './index.less'
import TextSide from '../../components/TextSide'
import ImgSide from '../../components/ImgSide'
import classNames from 'classnames'

export default function Left (props) {
    const [ showSide, setShowSide ] = useState(0)

    const isTextComponent = 1
    const isImgComponent = 2
    const _setShowSide = (which) => {
        if(showSide === which){
            setShowSide(0)
            return
        }
        setShowSide(which)
    }

    useEffect(() => {
        document.getElementById("center").addEventListener('click', () => {
            setShowSide(0)
        })
    }, [])
    return <div className={styles.main}>
        <ul className={styles.cmps}>
            <li className={classNames(styles.cmp, showSide === isTextComponent ? styles.selected : "")} onClick={() => _setShowSide(isTextComponent)}>
                <span>文本</span>
            </li><li className={classNames(styles.cmp, showSide === isImgComponent ? styles.selected : "")} onClick={() => _setShowSide(isImgComponent)}>
                <span>图片</span>
            </li>
        </ul>

        {showSide === isTextComponent && <TextSide/>}
        {showSide === isImgComponent && <ImgSide/>}
    </div>
}