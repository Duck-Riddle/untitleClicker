import { useDispatch } from "react-redux"
import { buttonPress } from "../../redux/actions"

export default function ButtonMain() {
    const dispatch = useDispatch()

    return (
        <button onClick={()=>dispatch(buttonPress())}>x</button>
    )
}