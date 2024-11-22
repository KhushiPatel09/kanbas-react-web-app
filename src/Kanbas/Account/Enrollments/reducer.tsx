// import { createSlice } from "@reduxjs/toolkit";
// import { enrollments } from "../../Database";


// const initialState = {
//     enrollments: enrollments,
// };
// const accountSlice = createSlice({
//     name: "enrollements",
//     initialState,
//     reducers: {
//         enroll: (state, { payload: enrollment }) => {
//             const newEnrollment: any = {
//                 _id: new Date().getTime().toString(),
//                 user: enrollment.user,
//                 course: enrollment.course

//             };
//             state.enrollments = [...state.enrollments, newEnrollment] as any;
//         },

//         unenroll: (state, { payload: enrollmentID }) => {
//             state.enrollments = state.enrollments.filter(
//                 (e: any) => e._id !== enrollmentID);
//         }
//     },
// });
// export const { enroll, unenroll } = accountSlice.actions;
// export default accountSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: JSON.parse(localStorage.getItem("enrollments") || "[]"),
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleEnrollment: (state, action) => {
      const { userId, courseId } = action.payload;
      const existingEnrollment = state.enrollments.find(
        (e: any) => e.user === userId && e.course === courseId
      );

      if (existingEnrollment) {
        state.enrollments = state.enrollments.filter(
          (e: any) => !(e.user === userId && e.course === courseId)
        );
      } else {
        state.enrollments.push({ user: userId, course: courseId });
      }
      
      // Persist to localStorage
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
      localStorage.setItem("enrollments", JSON.stringify(action.payload));
    },
  },
});

export const { toggleEnrollment, setEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
