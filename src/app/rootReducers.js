//import combineReduce method from rdk
import { combineReducers } from "@reduxjs/toolkit";

// import the slice with his reducer
import inventorySliceReducer from '../features/inventorySlice'

//assign it to the combineReducers method 
const rootReducers = combineReducers({
    //can assign to {inventory:itemsSliceReducer}
    inventory:inventorySliceReducer
})

export default rootReducers