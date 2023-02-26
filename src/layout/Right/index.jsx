import { useCanvasByContext } from '../../store/hook'
import EditCanvas from '../../components/EditCanvas'
import EditCmp from '../../components/EditCmp'

export default function Right (props) {
    const canvas = useCanvasByContext()
    const selectedCmp = canvas.getSelectedCmp()
    return (
        selectedCmp ? <EditCmp/> : <EditCanvas/>
    )
}
