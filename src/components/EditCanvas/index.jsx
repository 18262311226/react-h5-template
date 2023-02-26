import { useCanvasByContext } from '../../store/hook'
import InputColor from '../../lib/InputColor/index'
import styles from './index.less'
import Item from '../../lib/Item'

export default function EditCanvas (props) {
    const canvas = useCanvasByContext()
    const style = canvas.getCanvas().style

    const handelStyleChange = (e, {name, value}) => {
        canvas.updateCanvasStyle({[name]: value})
    }
    return (
        <div className={styles.main}>
            <div className={styles.title}>画布属性</div>

            <Item label="画布宽度 (px)">
                <input 
                    type="number" 
                    className={styles.itemRight}
                    value={style.width} 
                    onChange={(e) => handelStyleChange(e, {name: 'width', value: e.target.value - 0})}
                />
            </Item>

            <Item label="画布高度 (px)">
                <input 
                    type="number" 
                    className={styles.itemRight}
                    value={style.height} 
                    onChange={(e) => handelStyleChange(e, {name: 'height', value: e.target.value - 0})}
                />
            </Item>

            <Item label="背景颜色">
                <InputColor
                    className={styles.itemRight}
                    color={style.backgroundColor}
                    onChangeComplete={(e) => handelStyleChange(e, {name: 'backgroundColor', value: e.hex})}
                />
            </Item>

            <Item label="背景图片">
                <input 
                    type="text" 
                    className={styles.itemRight}
                    value={style.backgroundImage} 
                    onChange={(e) => handelStyleChange(e, {name: 'backgroundImage', value: e.target.value})}
                />
            </Item>
        </div>
    )
}
