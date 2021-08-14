import clock from "../features/clock/clockSlice"
import visible from "../features/window/windowSlice"

const reducers = {
    ...clock,
    ...visible,
}

export default reducers