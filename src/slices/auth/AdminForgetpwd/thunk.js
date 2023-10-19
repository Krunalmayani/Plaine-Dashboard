import { adminForgetPasswordError, adminForgetPasswordSuccess } from "./reducer"

//Include Both Helper File with needed methods

import {
    adminFakeForgetPwd,
} from "../../../helpers/fakebackend_helper";


export const adminForgetPassword = (admin, history) => async (dispatch) => {
  try {
      let response;
     
          response = adminFakeForgetPwd(
            admin.email
          )

      const data = await response;

      if (data) {
          dispatch(adminForgetPasswordSuccess(
              "Reset link are sended to your mailbox, check there first"
          ))
      }
  } catch (forgetError) {
      dispatch(adminForgetPasswordError(forgetError))
  }
}