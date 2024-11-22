// import { Routes, Route, Navigate } from "react-router";
// import Account from "./Account";
// import Dashboard from "./Dashboard";
// import KanbasNavigation from "./Navigation";
// import Courses from "./Courses";
// import "./styles.css";
// // import * as db from "./Database";
// import { useEffect, useState } from "react";
// import store from "./store";
// import { Provider, useSelector } from "react-redux";
// import ProtectedRoute from "./Account/ProtectedRoute";
// import Session from "./Account/Session";
// import * as userClient from "./Account/client";
// import * as courseClient from "./Courses/client";


// export default function Kanbas() {
//   // const [courses, setCourses] = useState<any[]>(db.courses);
//   const [courses, setCourses] = useState<any[]>([]);
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const [course, setCourse] = useState<any>({
//     _id: "1234", name: "New Course", number: "New Number",
//     startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
//   });

//   const updateCourse = async() => {
//     await courseClient.updateCourse(course);
//     setCourses(
//       courses.map((c) => {
//         if (c._id === course._id) {
//           return course;
//         } else {
//           return c;
//         }
//       })
//     );
//   };
  
//   const addNewCourse = async() => {
//     const newCourse = await userClient.createCourse(course);
//     setCourses([ ...courses, newCourse ])
//     // setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
//   };

//   const deleteCourse = async (courseId: any) => {
//     const status = await courseClient.deleteCourse(courseId);
//     setCourses(courses.filter((course) => course._id !== courseId));
//   };

//   const fetchCourses = async () => {
//     try {
//       const courses = await userClient.findMyCourses();
//       setCourses(courses);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   useEffect(() => {
//     fetchCourses();
//   }, [currentUser]);


//   return (
//         // <Provider store={store}>
//             <Session>
//                   <div id="wd-kanbas">
//                     <KanbasNavigation />
//                     <div className="wd-main-content-offset p-3">
//                       <Routes>
//                         <Route path="/" element={<Navigate to="Account" />} />
//                         <Route path="/Account/*" element={<Account />} />
//                         <Route path="/Dashboard" element={
//                         <ProtectedRoute> <Dashboard
//                           courses={courses}
//                           course={course}
//                           setCourse={setCourse}
//                           addNewCourse={addNewCourse}
//                           deleteCourse={deleteCourse}
//                           updateCourse={updateCourse}/> </ProtectedRoute>} />

//                         <Route path="/Courses" element={<ProtectedRoute><Dashboard courses={courses} course={course} setCourse={setCourse} addNewCourse={addNewCourse} deleteCourse={deleteCourse} updateCourse={updateCourse} /></ProtectedRoute>} />
                        
//                         <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses}/></ProtectedRoute>} />
//                         <Route path="/Calendar" element={<h1>Calendar</h1>} />
//                         <Route path="/Inbox" element={<h1>Inbox</h1>} />
//                       </Routes>
//                     </div>
//                   </div>
//             </Session>
//       // </Provider>

// );}


import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./styles.css";
import * as db from "./Database";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";

export default function Kanbas() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState<any[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const fetchCourses = async () => {
    let courses = [];
    try {
      courses = await userClient.findAllCourses();
    } catch (error) {
      console.error(error);
    }
    setCourses(courses);
  };


  const fetchEnrolledCourses = async () => {
    let enrolledCourses = [];
    try {
      enrolledCourses = await userClient.findMyCourses();
    } catch (error) {
      console.error(error);
    }
    setEnrolledCourses(enrolledCourses);
  };

  useEffect(() => {
    if(currentUser){
      fetchCourses();
    fetchEnrolledCourses();
    }
  }, [currentUser]);

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
    image: "images/reactjs.jpg",
  });


  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  enrolledCourses={enrolledCourses}
                  setEnrolledCourses={setEnrolledCourses}
                  setCourse={setCourse}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="Courses/:cid/*"
            element={
              <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute>
            }
          />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}
