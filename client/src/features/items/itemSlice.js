import { createAction, createSlice } from "@reduxjs/toolkit"

import Items from "./itemFactory"

const name = "items"
export const purchase = {
    request: createAction(`${name}/purchase/request`),
    canceled: createAction(`${name}/purchase/cancled`),
    finalize: createAction(`${name}/purchase/finalize`, function prepere(item, cost){
        return {
            payload: {
                item,
                cost
            }
        }
    })
}
const initialState = [...Items]

const itemSlice = createSlice({
    name,
    initialState,
    reducers: {
        update: () => {}
    },
    extraReducers: {
        [purchase.finalize]: ( items, { payload } ) => {
            const itemIndex = payload.item.index
                if (items[itemIndex].hasOwnProperty("ammount")) {
                    items[itemIndex].ammount++ 
                } else {
                    items[itemIndex].visible = false
                    items[itemIndex].purchased = true
                    items[itemIndex].__effects__ = items[itemIndex].__effects__.map(({active, ...rest})=>(
                        {active: true, ...rest}
                    ))
                }
        }
    }
})
const items = { [name]: itemSlice.reducer }
export const { update } = itemSlice.actions
export const selectItems = state => state[name]
export default items

