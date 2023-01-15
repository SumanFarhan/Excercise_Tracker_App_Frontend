import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addActivity = createAsyncThunk(
    'excercise/addActivity',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        
        if(data == ''){
            console.log('data is empty');
        }
        else{
        const res = await fetch('http://localhost:3007/addActivity', requestOptions)
        console.log('hit inside after adding activity');
        return res.json();
        }
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
    redirectToDashboard: false
}

export const Reducer = createSlice({
    name: 'excercise',
    initialState,
    reducers: {},
    extraReducers: {
        [addActivity.pending]: () => {
            console.log('pending');
        },
        [addActivity.fulfilled]: (state, action) => {
            state.response = action.payload.message;
            state.redirectToDashboard = true;
            alert(state.response);

        },
        [addActivity.rejected]: (state) => {
            alert("Fill all data")
        },

        // [loginUser.fulfilled]: (state, action) => {
        //         state.loginData = action.payload.data;

        // },
        // [todos.fulfilled]:(state,action)=>{
        //     state.usersData=action.payload.data;
        // }
    }
})