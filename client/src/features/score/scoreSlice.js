import { createSlice } from "@reduxjs/toolkit";
import { press as buttonPress } from "../button/buttonSlice";

const name = 'score';
const initialState = {
    value: 0,
};

const scoreSlice = createSlice({
    name,
    initialState,
    reducers: {

    },
    extraReducers: {
        [buttonPress.type]: ( _ ) => {
            _.value ++
        },
    }
});
const score = {[name]: scoreSlice.reducer}
export const { } = scoreSlice.actions;
export const selectScore = state => state[name];
export default score
