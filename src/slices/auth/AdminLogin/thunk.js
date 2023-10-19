//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeadminlogin,
  postJwtadminlogin,
  postSocialadminlogin,
} from "../../../helpers/fakebackend_helper";

import { adminloginSuccess, logoutUserSuccess, apiError, reset_adminlogin_flag, adminloginBegin } from './reducer';

// const fireBaseBackend = getFirebaseBackend();

export const adminloginUser = (user, history) => async (dispatch) => {

  try {
    let response;
    dispatch(adminloginBegin())

    response = postFakeadminlogin({
      email: 'admin@themesbrand.com',
      password: user.password,
    });


    var data = await response;
    data.role = 'Admin';


    if (data) {
      sessionStorage.setItem("authUser", JSON.stringify(data));

      dispatch(adminloginSuccess(data));
      history('/admin/dashboard')

    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    sessionStorage.removeItem("authUser");
    dispatch(logoutUserSuccess(true));

  } catch (error) {
    dispatch(apiError(error));
  }
};

export const socialadminlogin = (type, history) => async (dispatch) => {
  try {
    let response;

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      response = fireBaseBackend.socialadminloginUser(type);
    }


    const socialdata = await response;
    if (socialdata) {
      sessionStorage.setItem("authUser", JSON.stringify(response));
      dispatch(adminloginSuccess(response));
      history('/admin/dashboard')
    }

  } catch (error) {
    dispatch(apiError(error));
  }
};

export const resetadminloginFlag = () => async (dispatch) => {
  try {
    const response = dispatch(reset_adminlogin_flag());
    return response;
  } catch (error) {
    dispatch(apiError(error));
  }
};