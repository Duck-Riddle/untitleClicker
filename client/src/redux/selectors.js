import { createSelector } from "@reduxjs/toolkit"

import { matchHooks, sumEffects } from "../commons/utils"

export { selectClock } from "../features/clock/clockSlice"
export { selectWindow } from "../features/window/windowSlice"
export { selectButton } from "../features/button/buttonSlice"
export { selectCombo } from "../features/combo/comboSlice"
export { selectScore } from "../features/score/scoreSlice"
export { selectItems} from "../features/items/itemSlice"

export const selectComboToDisplay = createSelector(
    [state => state.combo.value,
     state => state.combo.max],
    (value, max) => {
        return `${(value*100)/max}%`
    }
)

export const selectScoreToDisplay = createSelector(
    [state => state.score.value,
     state => 8,   // <- later select max magnitude for score
     state => 10], // <- later select base of score display (2 || 4 || 8 || 10 || 16 || 32)
    (value, magnitude, base) => {
        const raund = Math.round(value)
        const string = raund.toString(base).toUpperCase()
        const len = string.length
        if (len > magnitude) {
            return 'x'.repeat(magnitude)
        }
        return ("0".repeat(magnitude-len) + string).split("")
    }
)

export const selectGeneratorIncome = createSelector([
    state => state.items.flatMap(({__effects__}) => __effects__),
    (state, item) => state.items[item.index]
    ], (effects, item) => {
        const matchingEffects = matchHooks(item, effects)
        const [flat, factor] = sumEffects(matchingEffects)
        return (item.baseIncome + flat) * factor * item.ammount
    }
)
