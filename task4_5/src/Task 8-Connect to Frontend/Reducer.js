
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addActivity = createAsyncThunk(
    'excercise/addActivity',
    async (data,thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const response = await fetch('http://localhost:3007/addActivity', requestOptions)
        if (!response.ok) {
            throw new Error("response error")
        }
        const res = await response.json()
        return res
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

export const getOneExcercise = createAsyncThunk(
    'excercise/getOneExcercise',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch('http://localhost:3007/getOneActivity', requestOptions)
        return res.json();
    }
)

export const updateExcercise = createAsyncThunk(
    'excercise/updateExcercise',
    async (data,{rejectWithValue}) => {
        try{
            const{_id,name,description,activitytype,duration,date}=data
            const res = await fetch('http://localhost:3007/editActivity',_id,{name,description,activitytype,duration,date})
            return res.json();
        }catch(error){
            return rejectWithValue(error.response.data)
        }
        // const requestOptions = {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // };
        // const res = await fetch('http://localhost:3007/editActivity', requestOptions)
        // return res.json();
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
    status:"",
    getError:"",
    redirectToDashboard: false
    getOneData:[],
    redirectToDashboard: false,
    valueEdited: false
}

export const Reducer = createSlice({
    name: 'excercise',
    initialState,
    reducers: {},
    extraReducers: {
        [addActivity.pending]: (state) => {
            state.redirectToDashboard = false
        },
        [addActivity.fulfilled]: (state, action) => {
                state.response=action.payload.message
                state.redirectToDashboard = true
                state.status="success"
                alert(state.response)
        },
        [addActivity.rejected]: (state,action) => {
            state.status="rejected add"
        },
        [getExcercise.fulfilled]:(state,action)=>{
            state.excerciseData=action.payload.message
        },
        [getOneExcercise.fulfilled]:(state,action)=>{
            state.getOneData=action.payload.message
        },
        [updateExcercise.fulfilled]:(state,action)=>{
            state.response = action.payload.message;
            state.redirectToDashboard = true;
           alert('edited')
        },
        [updateExcercise.pending]:(state,action)=>{
            console.log('pending');
        }
    }}
)
