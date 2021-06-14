import {configureStore} from '@reduxjs/toolkit';
import nameReducer from './nameslice';
import locationReducer from './locationslice';


export default configureStore({
    reducer:{
        name:nameReducer,
        location : locationReducer
    }
});