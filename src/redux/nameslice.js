import {createSlice} from '@reduxjs/toolkit';

const nameSlice = createSlice({
    name:"name",
    initialState:{
        location:""
    },


reducers: {
    naming :(state,action)=>{
        if(action.payload){
            state.location = action.payload;
        }
    }
}
}
)


export const { naming } = nameSlice.actions;

export default nameSlice.reducer;