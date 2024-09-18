import { createSlice} from "@reduxjs/toolkit";

const initialState={
    loading: null,
    error: null,
    user: null
}

const Authslice = createSlice({
    name: "Auth",
    initialState: initialState,
    reducers:{
        SetUser:(state,action)=>{
            state.user = action.payload
        },
        
            Logout:(state)=>{
                state.user = null
                state.loading = null,
                state.error = null
            }
        
    }

})
export const {SetUser,Logout} = Authslice.actions
export default Authslice.reducer