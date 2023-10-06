import { createSlice } from "@reduxjs/toolkit";
import {project4} from "../../common/data/project" 
import { getProjectList, addProjectList, updateProjectList, deleteProjectList, getProjectList4 } from './thunk';
export const initialState = {
    projectLists: [],
    projectLists4: [],
    error: {},
};


const ProjectsSlice = createSlice({
    name: 'ProjectsSlice',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(getProjectList.fulfilled, (state, action) => {
            state.projectLists = action.payload;
        });

        builder.addCase(getProjectList4.fulfilled, (state, action) => {
            state.projectLists4 = project4;
        });

        builder.addCase(getProjectList.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(addProjectList.fulfilled, (state, action) => {
            state.projectLists.push(action.payload);
        });
        builder.addCase(addProjectList.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateProjectList.fulfilled, (state, action) => {
            state.projectLists = state.projectLists.map(project =>
                project._id.toString() === action.payload.data._id.toString()
                    ? { ...project, ...action.payload.data }
                    : project
            );
        });
        builder.addCase(updateProjectList.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteProjectList.fulfilled, (state, action) => {
            state.projectLists = state.projectLists.filter(project => project.id.toString() !== action.payload.id.toString());
        });
        builder.addCase(deleteProjectList.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });
    }
});

export default ProjectsSlice.reducer;