import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addActivity = createAsyncThunk(
    'excercise/addActivity',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        
        if(data.name == '' || data.activityType == '' || data.description == '' || data.duration == '' || data.date == '')
        {
          alert('some fields are empty');
        }
        else{
        const res = await fetch('http://localhost:3007/addActivity', requestOptions)
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
    excerciseData:[],
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
        [getExcercise.fulfilled]:(state,action)=>{
            state.excerciseData=action.payload.message

        }
    }
})