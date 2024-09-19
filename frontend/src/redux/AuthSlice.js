import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../services/ApiEndpoint";

// Async thunk to fetch user data
export const updateUser = createAsyncThunk(
  'updateUser',
  async (_, { rejectWithValue }) => {
    try {
      const request = await get('/api/auth/CheckUser');
      const response = request.data; // Correctly returning data
      return response;
    } catch (error) {
      // Passing the error response using rejectWithValue
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

// Initial state for the auth slice
const initialState = {
  loading: null,
  error: null,
  user: null,
};

const Authslice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    SetUser: (state, action) => {
      state.user = action.payload;
    },
    Logout: (state) => {
      state.user = null;
      state.loading = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = null;
        state.user = action.payload; // Store user data on success
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = null;
        state.error = action.payload || action.error.message; // Capture error
        state.user = null; // Reset user in case of error
      });
  },
});

export const { SetUser, Logout } = Authslice.actions;
export default Authslice.reducer;
