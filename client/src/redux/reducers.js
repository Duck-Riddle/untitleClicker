import button from "../features/button/buttonSlice"
import clock from "../features/clock/clockSlice"
import visible from "../features/window/windowSlice"
import combo from "../features/combo/comboSlice"
import score from "../features/score/scoreSlice"

const reducers = {
    ...clock,
    ...visible,
    ...button,
    ...combo,
    ...score,
}

export default reducers