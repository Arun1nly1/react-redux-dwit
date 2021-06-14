import {createSlice} from '@reduxjs/toolkit';

const nameSlice = createSlice({
    name:"name",
    initialState:{
        name:""
    },


reducers: {
    naming :(state,action)=>{
        if(action.payload){
            state.name = action.payload;
        }
    }
}
}
)


export const { naming } = nameSlice.actions;

export default nameSlice.reducer;