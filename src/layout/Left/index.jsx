import { useState } from 'react'
import styles from './index.less'
import DetailsList from '../../components/DetailsList'

export default function Left (props) {
    const [ showSide, setShowSide ] = useState(false)
    return <div className={styles.main}>
        <ul className={styles.cmps}>
            <li className={styles.cmp} onClick={() => setShowSide(!showSide)}>
                <span>文本</span>
            </li>
        </ul>

        {showSide && <DetailsList/>}
    </div>
}