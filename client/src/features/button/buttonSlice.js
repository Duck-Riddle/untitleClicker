import { createSlice } from "@reduxjs/toolkit";

const name = 'button';
const initialState = {
    isPressed: false
};

const buttonSlice = createSlice({
    name,
    initialState,
    reducers: {
        press: (_)=>{_.isPressed=true},
        release: (_)=>{_.isPressed=false}
    },
    extraReducers: {

    }
})
const button = {[name]: buttonSlice.reducer}
export const {press, release} = buttonSlice.actions
export const selectButton = state => state[name]
export default button