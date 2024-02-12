import { configureStore } from "@reduxjs/toolkit"
import  DataStore  from "./DataStore.js"
const Store = configureStore({
    reducer: DataStore
})
export default Store