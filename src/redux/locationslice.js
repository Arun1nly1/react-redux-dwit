import {createSlice} from '@reduxjs/toolkit';

const locationSlice = createSlice({
    name:"location",
    initialState:{
        location:""
    },


reducers: {
    locate :(state,action)=>{
        if(action.payload){
            state.location = action.payload;
        }
    }
}
}
)


export const { locate } = locationSlice.actions;

export default locationSlice.reducer;