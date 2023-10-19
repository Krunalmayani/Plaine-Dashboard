import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  registrationError: null,
  message: null,
  loading: false,
  admin: null,
  success: false,
  error: false
};

const adminregisterSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    registeradminSuccessful(state, action) {
      state.admin = action.payload;
      state.loading = false;
      state.success = true;
      state.registrationError = null;
    },
    registeradminFailed(state, action) {
      state.admin = null;
      state.loading = false;
      state.registrationError = action.payload;
      state.error = true;
    },
    resetRegisterFlagChange(state) {
      state.success = false;
      state.error = false;
    },
    apiErrorChange(state, action){
      state.error = action.payload;
      state.loading = false;
      state.isadminLogout = false;
    }
  }
});

export const {
  registeradminSuccessful,
  registeradminFailed,
  resetRegisterFlagChange,
  apiErrorChange
} = adminregisterSlice.actions;

export default adminregisterSlice.reducer;