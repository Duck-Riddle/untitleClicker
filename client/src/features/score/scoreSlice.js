import { createSlice } from "@reduxjs/toolkit";

import { update as updateItems } from "../items/itemSlice"
import { purchase } from "../items/itemSlice";
import { press as buttonPress } from "../button/buttonSlice";
import { tick } from "../clock/clockSlice";

const name = 'score';
const initialState = {
    value: 0,
    losses: 0,
    income: 0
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
        [purchase.finalize]: ( _, {payload}) => {
            _.value -= payload.cost
            _.losses += payload.cost
        },
        [updateItems]: ( _, {payload}) => {
            _.income = payload.income
        },
        [tick]: ( _ ) => {
            _.value += _.income
        }
    }
});
const score = {[name]: scoreSlice.reducer}
export const { } = scoreSlice.actions;
export const selectScore = state => state[name];
export default score
