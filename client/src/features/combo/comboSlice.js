import { createSlice } from "@reduxjs/toolkit";
import { buttonPress } from "../../redux/actions";


const name = 'combo';
const initialState = {
    value: 0,
    max: 100,
    isOverflowing: false
};

const comboSlice = createSlice({
    name,
    initialState,
    reducers: {
        decrement: ( _, {payload: flush}) => {
            _.value -= !flush ? _.max/100 : _.max 
        },
        toggleOverflow: ( _, { payload: bool}) => {
            _.isOverflowing = bool? bool : !_.isOverflowing  
        },
    },
    extraReducers: {
        [buttonPress.type]: ( _ ) => {
            if ( _.value < _.max ) {
                _.value ++
            } else _.value = _.max
        }
    }
})
const combo = {[name]: comboSlice.reducer}
export const { decrement, toggleOverflow } = comboSlice.actions
export const selectCombo = state => state[name]
export default combo
