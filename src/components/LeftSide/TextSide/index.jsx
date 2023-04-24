import leftsidestyles from './index.less'
import { defaultCommonStyle } from '../../../utils/const';
import { useCanvasByContext } from '../../../store/hook';

const defaultStyle = {
    ...defaultCommonStyle,
    width: 170,
    height: 30,
    lineHeight: "30px",
    fontSize: 12,
    fontWeight: "normal",
    color: "#000",
    backgroundColor: "#ffffff00",
    textAlign: "left",
    wordSpacing: "10px",
  };
  
  const settings = [
    {
      value: "标题",
      style: {
        ...defaultStyle,
        fontSize: 28,
        height: 50,
        lineHeight: "50px",
      },
    },
    {
      value: "正文",
      style: defaultStyle,
    },
  ];

export default function TextSide (props) {
    const canvas = useCanvasByContext()
    const isTextComponent = 1
    const addCmp = (_cmp) => {
        canvas.addCmp(_cmp)
    }
    return <div className={leftsidestyles.main}>
        <ul className={leftsidestyles.box}>
            {settings.map((item) => (
                <li className={leftsidestyles.item} onClick={() => {addCmp({...item, type: isTextComponent})}} key={item.value}>
                    {item.value}
                </li>
            ))}
        </ul>
    </div>
}