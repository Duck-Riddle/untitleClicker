import { createSlice } from "@reduxjs/toolkit";

const initialDate = Date.now()
const name = 'clock';
const initialState = {
    //unix timestamp <- easy to calculate time flow
    genesis: initialDate, //when we 1st started playing
    playthrough: initialDate, //time since reset/advancment etc
    current: initialDate, // last registered time
};

const clockSlice = createSlice({
    name,
    initialState,
    reducers: {

        tick: ( state, {payload} ) => {
            
            state.current = payload
        },

        adjust: ( ) => { }

    },
    extraReducers: {

    }
})
const clock = {[name]:clockSlice.reducer}
export const { tick, adjust } = clockSlice.actions
export const selectClock = state => state[name]
export default clock