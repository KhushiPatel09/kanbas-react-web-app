// import { createSlice } from "@reduxjs/toolkit";
// // import db from "../../Database";
// import { assignments } from "../../Database";

// const initialState = {
//   assignments: assignments,
//   assignment: {
//     title: "",
//     week: "",
//     dueDate: "",
//     points: "",
//     course: "",
//   },
// };
// const assignmentSlice = createSlice({
//     name: "assignments",
//     initialState,
//     reducers: {
//         addAssignment: (state, { payload: assignment }) => {
//         const newAssignment: any = {
//           _id: new Date().getTime().toString(),
//           title: assignment.title,
//       };
//       state.assignments = [...state.assignments, newAssignment] as any;
//     },
//     deleteAssignment: (state, { payload: AssignmentId }) => {
//       state.assignments = state.assignments.filter(
//         (a: any) => a._id !== AssignmentId);
//     },
//     updateAssignment: (state, { payload: assignment }) => {
//       state.assignments = state.assignments.map((a: any) =>
//         a._id === assignment._id ? assignment : a
//       ) as any;
//     },
//     editAssignment: (state, { payload: AssignmentId }) => {
//       state.assignments = state.assignments.map((a: any) =>
//         a._id === AssignmentId ? { ...a, editing: true } : a
//       ) as any;
//     },
//   },
//   });
//   export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
//   assignmentSlice.actions;
//   export default assignmentSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: assignments,
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
                availableDate: assignment.availableDate,
                dueDate: assignment.dueDate,
                availableUntilDate: assignment.availableUntilDate,
                points: assignment.points,
                description: assignment.description
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentID }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentID);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
        }
    },
});
export const { addAssignment, deleteAssignment, updateAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;


// deleteModule: (state, { payload: moduleId }) => {
//     state.modules = state.modules.filter(
//       (m: any) => m._id !== moduleId);
//   },
