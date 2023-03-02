import styles from './index.less'
import { useCanvasByContext } from '../../store/hook';
import { defaultCommonStyle } from '../../utils/const';

const defaultStyle = {
  position: "absolute",
  top: 1,
  left: 0,
  width: 80,
  height: 80,
  borderRadius: "0%",
  borderStyle: "none",
  borderWidth: "0",
  borderColor: "#ffffff00",
  ...defaultCommonStyle
};
  
const settings = [
  {
    value: "http://150.158.30.131:8181/certificate.jpg",
    style: defaultStyle,
  },
  {
    value: "http://150.158.30.131:8181/chuliu.jpeg",
    style: defaultStyle,
  },
  {
    value: "http://150.158.30.131:8181/tiger.png",
    style: defaultStyle,
  },
  {
    value: "http://150.158.30.131:8181/hua.png",
    style: defaultStyle,
  },
];

export default function ImgSide (props) {
    const canvas = useCanvasByContext()
    const isImgComponent = 2
    const addCmp = (_cmp) => {
        canvas.addCmp(_cmp)
    }
    return <div className={styles.main}>
        <ul className={styles.box}>
            {settings.map((item) => (
                <li className={styles.item} onClick={() => {addCmp({...item, type: isImgComponent})}} key={item.value}>
                    <img src={item.value} alt="" />
                </li>
            ))}
        </ul>
    </div>
}