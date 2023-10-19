import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  forgetSuccessMsg: null,
  forgetError: null,
};

const adminforgotPasswordSlice = createSlice({
  name: "forgotpwd",
  initialState,
  reducers: {
    adminForgetPasswordSuccess(state, action) {
      state.forgetSuccessMsg = action.payload
    },
    adminForgetPasswordError(state, action) {
      state.forgetError = action.payload
    },
  },
});

export const {
  adminForgetPasswordSuccess,
  adminForgetPasswordError
} = adminforgotPasswordSlice.actions

export default adminforgotPasswordSlice.reducer;
