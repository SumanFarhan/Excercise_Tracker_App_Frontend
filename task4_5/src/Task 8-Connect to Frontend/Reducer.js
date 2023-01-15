import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addExcercise = createAsyncThunk(
    'excercise/addExcercise',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch('http://localhost:3007/addActivity', requestOptions)
        return res.json();
    }
)

export const getExcercise = createAsyncThunk(
    'excercise/getExcercise',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch('http://localhost:3007/getActivity', requestOptions)
        return res.json();
    }
)

export const updateExcercise = createAsyncThunk(
    'excercise/updateExcercise',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch('http://localhost:3007/editActivity', requestOptions)
        return res.json();
    }
)
export const deleteExcercise = createAsyncThunk(
    'excercise/deleteExcercise',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch('http://localhost:3001/signup', requestOptions)
        return res.json();
    }
)

const initialState = {

}

export const Reducer = createSlice({
    name: 'excercise',
    initialState,
    reducers: {},
    extraReducers: {
        // [signupUser.pending]: () => {
        //     console.log('pending');
        // },
        // [signupUser.fulfilled]: (state, action) => {
        //     state.usersData = action.payload.data;
        //     alert("User Registered SuccessFully")

        // },
        // [signupUser.rejected]: (state) => {
        //     alert("Fill all data")
        // },

        // [loginUser.fulfilled]: (state, action) => {
        //         state.loginData = action.payload.data;

        // },
        // [todos.fulfilled]:(state,action)=>{
        //     state.usersData=action.payload.data;
        // }
    }
})