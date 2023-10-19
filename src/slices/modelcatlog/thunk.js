import { createAsyncThunk } from "@reduxjs/toolkit";
//Include Both Helper File with needed methods

import {
    getModelscatlog as getModelscatlogApi
} from "../../helpers/fakebackend_helper";

export const getmodelscatlog = createAsyncThunk("Modelscatlog/getModelscatlog", async () => {
    try {
        const response = getModelscatlogApi();
        return response;
    } catch (error) {
        return error;
    }
});

