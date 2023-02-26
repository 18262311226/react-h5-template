import styles from './index.less'
import Item from '../../lib/Item'
import InputColor from '../../lib/InputColor'
import { useCanvasByContext } from '../../store/hook'

export default function EditCmp (props) {
    const canvas = useCanvasByContext()
    const {style, value} = canvas.getSelectedCmp()

    const handelValueChange = (e) => {
        let newValue = e.target.value

        canvas.updateSelectedCmp(null,newValue)
    }

    const handelStyleChange = (e, {name, value}) => {
        let newStyle = {[name]: value}

        canvas.updateSelectedCmp(newStyle)
    }
    return (
        <div className={styles.main}>
            <div className={styles.title}>组件属性</div>

            <Item label="描述:">
                <input 
                    type="text" 
                    className={styles.itemRight}
                    value={value} 
                    onChange={handelValueChange}
                />
            </Item>

            {style.fontSize != undefined && <Item label="字体大小:">
                    <input 
                        type="number" 
                        className={styles.itemRight}
                        value={style.fontSize} 
                        onChange={(e) => handelStyleChange(e, {name: 'fontSize', value: e.target.value - 0})}
                    />
                </Item>
            }

            {style.fontWeight != undefined && <Item label="字体大小:">
                    <select 
                        className={styles.itemRight}
                        value={style.fontWeight} 
                        onChange={(e) => handelStyleChange(e, {name: 'fontWeight', value: e.target.value})}
                    >
                        <option value="normal">normal</option>
                        <option value="bold">bold</option>
                        <option value="weight">weight</option>
                    </select>
                </Item>
            }

            {style.lineHeight != undefined && <Item label="字体行高:">
                    <input 
                        type="number" 
                        className={styles.itemRight}
                        value={parseInt(style.lineHeight)} 
                        onChange={(e) => handelStyleChange(e, {name: 'lineHeight', value: e.target.value - 0})}
                    />
                </Item>
            }

            {style.textAlign !== undefined && (
                <Item label="对齐: ">
                <select
                    className={styles.itemRight}
                    value={style.textAlign}
                    onChange={(e) => {
                        handelStyleChange(e, {
                            name: "textAlign",
                            value: e.target.value,
                        });
                    }}>
                    <option value="left">居左</option>
                    <option value="center">居中</option>
                    <option value="right">居右边</option>
                </select>
                </Item>
            )}

            {style.borderRadius !== undefined && (
                <Item label="圆角: ">
                <input
                    className={styles.itemRight}
                    type="text"
                    value={style.borderRadius}
                    onChange={(e) =>
                        handelStyleChange(e, {
                            name: "borderRadius",
                            value: e.target.value,
                        })
                    }
                />
                </Item>
            )}

            <Item label="边框样式: ">
                <select
                className={styles.itemRight}
                value={style.borderStyle}
                onChange={(e) => {
                    handelStyleChange(e, {
                    name: "borderStyle",
                    value: e.target.value,
                    });
                }}>
                <option value="none">none</option>
                <option value="dashed">dashed</option>
                <option value="dotted">dotted</option>
                <option value="double">double</option>
                <option value="groove">groove</option>
                <option value="hidden">hidden</option>
                <option value="solid">solid</option>
                </select>
            </Item>

            <Item label="边框宽度: ">
                <input
                className={styles.itemRight}
                type="number"
                value={style.borderWidth}
                onChange={(e) =>
                    handelStyleChange(e, {
                    name: "borderWidth",
                    value: e.target.value - 0,
                    })
                }
                />
            </Item>

            <Item label="边框颜色: ">
                <InputColor
                    className={styles.itemRight}
                    color={style.borderColor || "#ffffff00"}
                    onChangeComplete={(e) =>
                        handelStyleChange(null, {name: "borderColor", value: e.hex})
                    }
                />
            </Item>

            {style.color !== undefined && (
                <Item label="字体颜色: ">
                <InputColor
                    className={styles.itemRight}
                    color={style.color}
                    onChangeComplete={(e) =>
                    handelStyleChange(null, {name: "color", value: e.hex})
                    }
                />
                </Item>
            )}

            {style.backgroundColor !== undefined && (
                <Item label="背景颜色: ">
                <InputColor
                    className={styles.itemRight}
                    color={style.backgroundColor}
                    onChangeComplete={(e) =>
                    handelStyleChange(null, {name: "backgroundColor", value: e.hex})
                    }
                />
                </Item>
            )}
        </div>
    )
}