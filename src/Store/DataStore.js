import { createSlice } from "@reduxjs/toolkit";

export const DataStore = createSlice({
    name: "datastore",
    initialState: {
        Data:{}
    },
    reducers: {
        updateDataStore: (state,action)=>{
            const data = action.payload
            console.log(action)
            state.Data = data
            
        },

        getDataStore: (state)=>{
            return state.Data
        }
    }
})

export const { updateDataStore, getDataStore } = DataStore.actions

export default DataStore.reducer