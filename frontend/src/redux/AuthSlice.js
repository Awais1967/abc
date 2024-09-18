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
        }
    }

})
export const {SetUser} = Authslice.actions
export default Authslice.reducer