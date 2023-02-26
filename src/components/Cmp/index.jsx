import classNames from 'classnames'
import React, { Component } from 'react'
import { CanvasContext } from '../../Context'
import styles from './index.less'

export default class Cmp extends Component {
    static contextType = CanvasContext
    onDragStart = (e) => {
        this.setSelected()
        const startX = e.pageX
        const startY = e.pageY

        e.dataTransfer.setData('text', startX + ',' + startY)
    }

    setSelected = () => {
        this.context.setSelectedCmpIndex(this.props.index)
    }

    onMouseDown = (e) => {
        const direction = e.target.dataset.direction;
        if (!direction) {
        return;
        }
        e.stopPropagation();
        e.preventDefault();

        let startX = e.pageX;
        let startY = e.pageY;

        const { cmp } = this.props;
        const move = (e) => {
            const x = e.pageX;
            const y = e.pageY;

            let disX = x - startX;
            let disY = y - startY;

            // style top left width height
            let newStyle = {};
            // todo top left
            if (direction) {
                if (direction.indexOf("top") >= 0) {
                disY = 0 - disY;
                newStyle.top = cmp.style.top - disY;
                }

                if (direction.indexOf("left") >= 0) {
                disX = 0 - disX;
                newStyle.left = cmp.style.left - disX;
                }
            }

            Object.assign(newStyle, {
                width: cmp.style.width + disX,
                height: cmp.style.height + disY,
            });

            this.context.updateSelectedCmp(newStyle);

            startX = x;
            startY = y;
        };

        const up = () => {
          document.removeEventListener("mousemove", move);
          document.removeEventListener("mouseup", up);
        };
        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", up);
    }

    render(){
        const { cmp, selected } = this.props
        const { style, value} = cmp

        const { width, height } = style
        return (
            <div 
                className={styles.main} 
                draggable="true" 
                onDragStart={this.onDragStart}
                onClick={this.setSelected}
            >
                <div className={styles.cmp} style={style}>
                    {getCmp(cmp)}
                </div>

                {/* 组件的功能、选中的样式 */}
                <ul
                className={classNames(
                    styles.editStyle,
                    selected ? styles.selected : styles.unselected
                )}
                style={{
                    top: style.top - 2,
                    left: style.left - 2,
                    width: style.width,
                    height: style.height,
                }}
                onMouseDown={this.onMouseDown}
                >
                    <li
                        className={styles.stretchDot}
                        style={{ top: -8, left: -8 }}
                        data-direction="top, left"
                    />

                    <li
                        className={styles.stretchDot}
                        style={{
                        top: -8,
                        left: width / 2 - 8,
                        }}
                        data-direction="top"
                    />

                    <li
                        className={styles.stretchDot}
                        style={{ top: -8, left: width - 8 }}
                        data-direction="top right"
                    />

                    <li
                        className={styles.stretchDot}
                        style={{ top: height / 2 - 8, left: width - 8 }}
                        data-direction="right"
                    />

                    <li
                        className={styles.stretchDot}
                        style={{
                        top: height - 8,
                        left: width - 8,
                        }}
                        data-direction="bottom right"
                    />

                    <li
                        className={styles.stretchDot}
                        style={{
                        top: height - 8,
                        left: width / 2 - 8,
                        }}
                        data-direction="bottom"
                    />

                    <li
                        className={styles.stretchDot}
                        style={{
                        top: height - 8,
                        left: -8,
                        }}
                        data-direction="bottom left"
                    />
                    <li
                        className={styles.stretchDot}
                        style={{
                        top: height / 2 - 8,
                        left: -8,
                        }}
                        data-direction="left"
                    />
                </ul>
            </div>
        )
    }
}

function getCmp(cmp){
    switch(cmp.type){
        case 1:
            return cmp.value
        break;
        case 2:
            return <img src={cmp.value}/>
        break;
    }
}