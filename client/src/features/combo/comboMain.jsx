import { useSelector } from "react-redux"

import { selectComboToDisplay } from "../../redux/selectors"
import { StyledThermometer, ThermometerFill } from "./comboStyle"

export default function ComboBar() {

    const comboToDisplay = useSelector(selectComboToDisplay)

    return (
        <StyledThermometer>
            <ThermometerFill combo={comboToDisplay}/>
        </StyledThermometer>
    )
}