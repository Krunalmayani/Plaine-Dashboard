import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: {},
  error: "", // for error message
  loading: false,
  isUserLogout: false,
  errorMsg: false, // for error
};

const adminloginSlice = createSlice({
  name: "adminlogin",
  initialState,
  reducers: {
    adminloginBegin(state, action) {
      state.loading = true;
    },
    apiError(state, action) {
      state.errorMsg = action.payload.data;
      state.loading = true;
      state.error = true;
      state.isUserLogout = false;
    },
    adminloginSuccess(state, action) {
      state.user = action.payload
      state.loading = false;
      state.error = false;
    },
    logoutUserSuccess(state, action) {
      state.isUserLogout = true
    },
    reset_adminlogin_flag(state) {
      state.errorMsg = null
      state.loading = false;
      state.error = false;
    }
  },
});

export const {
  apiError,
  adminloginSuccess,
  logoutUserSuccess,
  reset_adminlogin_flag,
  adminloginBegin
} = adminloginSlice.actions

export default adminloginSlice.reducer;