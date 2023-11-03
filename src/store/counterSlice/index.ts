import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../index.ts';

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementBy: (state, action: {payload: number}) => {
            state.value += action.payload;
        },
    },
});

export const {
    increment,
    decrement,
    incrementBy,
} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
