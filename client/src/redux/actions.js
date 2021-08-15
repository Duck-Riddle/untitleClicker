export { tick, adjust } from "../features/clock/clockSlice"
export { isVisible, notVisible } from "../features/window/windowSlice"
export { press as buttonPress, release as buttonRelease } from "../features/button/buttonSlice" // <- this not
// export { decrement  as comboDecrement, toggleOverflow } from "../features/combo/comboSlice" <- this throw error