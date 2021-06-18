//import all teh rootreducer merget with combineReducer method
import rootReducers from './rootReducers';
//use configureStore to create store via rdk
import { configureStore } from '@reduxjs/toolkit';


//creates the store with rootreducer info
export default configureStore({
  reducer: (state, action) => rootReducers(state, action),
});
