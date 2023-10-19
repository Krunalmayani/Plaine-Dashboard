import { createSlice } from "@reduxjs/toolkit";
import { getmodelscatlog } from './thunk';

export const initialState = {
    models: [],
    error: {},
};

const Modelcatlogslice = createSlice({
    name: 'Modelscatlog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getmodelscatlog.fulfilled, (state, action) => {
            state.models = action.payload;
        });
        builder.addCase(getmodelscatlog.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });
    }
});

export default Modelcatlogslice.reducer;