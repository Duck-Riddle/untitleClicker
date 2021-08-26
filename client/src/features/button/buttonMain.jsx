import { useDispatch } from "react-redux"

import StyledButton from "./buttonStyle"
import { buttonPress } from "../../redux/actions"

export default function ButtonMain() {
    const dispatch = useDispatch()

    return (
        <StyledButton onClick={()=>dispatch(buttonPress())}>x</StyledButton>
    )
}