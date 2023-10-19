//Include Both Helper File with needed methods

import {
  adminpostFakeRegister,

} from "../../../helpers/fakebackend_helper";

// action
import {
  registeradminSuccessful,
  registeradminFailed,
  resetRegisterFlagChange,
  apiErrorChange
} from "./reducer";

// initialize relavant method of both Auth


// Is admin register successfull then direct plot admin in redux.
export const registeradmin = (admin) => async (dispatch) => {
  try {
    let response;

   if (process.env.REACT_APP_API_URL) {
      response = adminpostFakeRegister(admin);
      const data = await response;

      if (data.message === "success") {
        dispatch(registeradminSuccessful(data));
      } else {
        dispatch(registeradminFailed(data));
      }
    }
  } catch (error) {
    dispatch(registeradminFailed(error));
  }
};

export const resetRegisterFlag = () => {
  try {
    const response = resetRegisterFlagChange();
    return response;
  } catch (error) {
    return error;
  }
};

export const apiError = () => {
  try {
    const response = apiErrorChange();
    return response;
  } catch (error) {
    return error;
  }
};