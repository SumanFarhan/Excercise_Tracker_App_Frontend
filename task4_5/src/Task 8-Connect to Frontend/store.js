import { configureStore } from "@reduxjs/toolkit";
import {Reducer} from './Reducer'

export const store = configureStore({
    reducer: {
        excercise: Reducer.reducer
    }
})