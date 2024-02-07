import { createSlice } from "@reduxjs/toolkit";

export const DataStore = createSlice({
    name: "datastore",
    initialState: {
        Data : {}
    },
    reducers: {
        updateDataStore: (action,state)=>{
            const data = action.payload
            state.Data = data
        },

        getDataStore: (state)=>{
            return state.Data
        }
    }
})

export const { updateDataStore, getDataStore } = DataStore.actions

export default DataStore.reducer