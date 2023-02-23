import classNames from 'classnames'
import { Component } from 'react'
import { CanvasContext } from '../../Context'
import styles from './index.less'

export default class Cmp extends Component {
    static contextType = CanvasContext()
    onDragStart = (e) => {
        this.setSelected()
        const startX = e.pageX
        const startY = e.pageY

        e.dataTransfer.setData('text', startX + ',' + startY)
    }

    setSelected = () => {
        this.context.setSelectedCmpIndex(this.props.index)
    }

    render(){
        const { cmp, selected } = this.props
        const { style, value} = cmp
        return (
            <div 
                className={styles.main} 
                draggable="true" 
                onDragStart={this.onDragStart}
                onClick={this.setSelected}
            >
                <div className={styles.cmp} style={style}>
                    {value}
                </div>

                <div 
                    className={classNames(styles.editStyle, selected ? styles.selected : styles.unselected)}
                    style={
                        {
                            top: style.top - 2,
                            left: style.left - 2,
                            width: style.width,
                            height: style.height
                        }
                    }
                >
                </div>
            </div>
        )
    }
}