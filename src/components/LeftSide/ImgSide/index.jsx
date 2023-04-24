import leftsidestyles from './index.less'
import { useCanvasByContext } from '../../../store/hook';
import { defaultCommonStyle } from '../../../utils/const';

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
  
const url = "http://150.158.30.131:8181/";

const settings = [
  {
    value: url + "react-head.png",
    style: defaultStyle,
  },

  {
    value: url + "bg1.png",
    style: defaultStyle,
  },
  {
    value: url + "bg2.png",
    style: defaultStyle,
  },
  {
    value: url + "blue-star.png",
    style: defaultStyle,
  },
  {
    value: url + "yellow-star.png",
    style: defaultStyle,
  },
  {
    value: url + "book.png",
    style: defaultStyle,
  },

  {
    value: url + "dancer.png",
    style: defaultStyle,
  },
  {
    value: url + "girl.png",
    style: defaultStyle,
  },
  {
    value: url + "red-girl.png",
    style: defaultStyle,
  },
  {
    value: url + "icon.png",
    style: defaultStyle,
  },

  {
    value: url + "lock.png",
    style: defaultStyle,
  },

  {
    value: url + "tree.png",
    style: defaultStyle,
  },

  {
    value: url + "certificate.jpg",
    style: defaultStyle,
  },
  {
    value: url + "chuliu.jpeg",
    style: defaultStyle,
  },
  {
    value: url + "tiger.png",
    style: defaultStyle,
  },
  {
    value: url + "hua.png",
    style: defaultStyle,
  },
];

export default function ImgSide (props) {
    const canvas = useCanvasByContext()
    const isImgComponent = 2
    const addCmp = (_cmp) => {
        canvas.addCmp(_cmp)
    }
    return <div className={leftsidestyles.main}>
        <ul className={leftsidestyles.box}>
            {settings.map((item) => (
                <li className={leftsidestyles.item} onClick={() => {addCmp({...item, type: isImgComponent})}} key={item.value}>
                    <img src={item.value} alt="" />
                </li>
            ))}
        </ul>
    </div>
}