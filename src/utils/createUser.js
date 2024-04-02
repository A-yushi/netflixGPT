import { createSlice } from "@reduxjs/toolkit";

const createUser = createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser : (state,action)=>{
            return action.payload;

        },
        removeUser : (state,action)=>{
            return null;

        }

    }

})

export const {addUser, removeUser} = createUser.actions;
export default createUser.reducer;
    