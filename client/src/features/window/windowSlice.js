import { createSlice } from "@reduxjs/toolkit";

const name = 'window';
const initialState = {
    default: true
};
const windowSlice = createSlice({
    name,
    initialState,
    reducers: {
        isVisible: ( state, payload ) => {
            if (payload.hasOwnProperty('id')) {
                state[payload.id] = true
            } else state.default = true
        },
        notVisible: ( state, payload ) => {
            if (payload.hasOwnProperty('id')) {
                state[payload.id] = false
            } else state.default = false
        }
    }
})
const visible = {[name]: windowSlice.reducer}
export const { isVisible, notVisible } = windowSlice.actions
export const selectWindow = state => state[name]
export default visible