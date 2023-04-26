import leftsidestyles from '../index.less'
import { defaultCommonStyle } from '../../../utils/const';
import { useCanvasByContext } from '../../../store/hook';

const defaultStyle = {
    ...defaultCommonStyle,
    width: 120,
    height: 120,
    backgroundColor: "blue",
    borderColor: "blue",
};

const settings = [
    {
        value: "",
        style: {
            ...defaultStyle,
            borderWidth: 1,
            borderStyle: "solid",
            backgroundColor: "transparent"
        },
    },
    {
        value: "",
        style: defaultStyle,
    },
];

export default function GraphSide (props) {
    const canvas = useCanvasByContext()
    const isGraphComponent = 1
    const addCmp = (_cmp) => {
        canvas.addCmp(_cmp)
    }
    return <div className={leftsidestyles.main}>
        <ul className={leftsidestyles.box}>
            {settings.map((item) => (
                <li 
                    className={leftsidestyles.item} 
                    onClick={() => {addCmp({...item, type: isGraphComponent})}} 
                    key={item.value}
                    style={
                        {
                            width: item.style.width,
                            height: item.style.height,
                            borderStyle: item.style.borderStyle,
                            borderColor: item.style.borderColor,
                            backgroundColor: item.style.backgroundColor
                        }
                    }
                >
                </li>
            ))}
        </ul>
    </div>
}