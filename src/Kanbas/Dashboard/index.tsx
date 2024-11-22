// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { enroll, unenroll } from "../Account/Enrollments/reducer"; // Assuming you have an enroll action
// import { useEffect, useState } from "react";
// import * as userClient from "../Account/client";
// import * as courseClient from "../Courses/client";


// export default function Dashboard({
//     courses,
//     course,
//     setCourse,
//     addNewCourse,
//     deleteCourse,
//     updateCourse
// }: {
//     courses: any[];
//     course: any;
//     setCourse: (course: any) => void;
//     addNewCourse: () => void;
//     deleteCourse: (course: any) => void;
//     updateCourse: () => void;
// }) {
//     const { currentUser } = useSelector((state: any) => state.accountReducer);
//     const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
//     const dispatch = useDispatch();
//     const isFaculty = currentUser.role === 'FACULTY';
//     const [showAllCourses, setShowAllCourses] = useState(false);

//     const enrolledCourses = courses.filter((course) =>
//         enrollments.some(
//             (enrollment: any) =>
//                 enrollment.user === currentUser._id &&
//                 enrollment.course === course._id
//         )
//     );

//     const displayedCourses = showAllCourses ? courses : enrolledCourses;

//     const handleUnenroll = (courseId: string) => {
//         const enrollment = enrollments.find(
//             (enrollment: any) =>
//                 enrollment.user === currentUser._id && enrollment.course === courseId
//         );
//         if (enrollment) {
//             dispatch(unenroll(enrollment._id));
//         }
//     };

//     const handleEnroll = (courseId: string) => {
//         dispatch(enroll({ user: currentUser._id, course: courseId }));
//     };


//     return (
//         <div id="wd-dashboard">
//             <h1 id="wd-dashboard-title">Dashboard</h1>
//             {/* <p>{currentUser.role}</p> */}

//             {!isFaculty &&
//                 <button
//                     className="btn btn-primary float-end"
//                     onClick={() => setShowAllCourses(!showAllCourses)}
//                 >
//                     {showAllCourses ? "My Enrollments" : "Enrollments"}
//                 </button>}

//             {isFaculty && (
//                 <div>
//                     <h5>
//                         New Course
//                         <button
//                             className="btn btn-primary float-end"
//                             id="wd-add-new-course-click"
//                             onClick={addNewCourse}
//                         >
//                             Add
//                         </button>
//                         <button
//                             className="btn btn-warning float-end me-2"
//                             onClick={updateCourse}
//                             id="wd-update-course-click"
//                         >
//                             Update
//                         </button>
//                     </h5>
//                     <br />
//                     <input
//                         value={course.name}
//                         className="form-control mb-2"
//                         onChange={(e) => setCourse({ ...course, name: e.target.value })}
//                     />
//                     <textarea
//                         value={course.description}
//                         className="form-control"
//                         onChange={(e) =>
//                             setCourse({ ...course, description: e.target.value })
//                         }
//                     />
//                 </div>
//             )}

//             <h2 id="wd-dashboard-published">
//                 {"Published Courses"} ({displayedCourses.length})
//             </h2>
//             <hr />
//             <div id="wd-dashboard-courses" className="row">
//                 <div className="row row-cols-1 row-cols-md-5 g-4">
//                     {displayedCourses.map((course) => {
//                         const isEnrolled = enrollments.some(
//                             (enrollment: any) =>
//                                 enrollment.user === currentUser._id &&
//                                 enrollment.course === course._id
//                         );

//                         return (
//                             <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
//                                 <div className="card h-100 rounded-3 overflow-hidden">
//                                     <Link
//                                         to={isEnrolled ? `/Kanbas/Courses/${course._id}/Home` : '#'}
//                                         className="wd-dashboard-course-link text-decoration-none text-dark"
//                                     >
//                                         <img src={course.image} width="100%" height={160} />
//                                         <div className="card-body">
//                                             <h5 className="wd-dashboard-course-title card-title">
//                                                 {course.name}
//                                             </h5>
//                                             <p
//                                                 className="wd-dashboard-course-title card-text overflow-y-hidden"
//                                                 style={{ maxHeight: 100 }}
//                                             >
//                                                 {course.description}
//                                             </p>
//                                         </div>
//                                         <div className="card-footer mb-0">
//                                             <button className="btn btn-primary">Go</button>
//                                             {isFaculty && (
//                                                 <>
//                                                     <button
//                                                         onClick={(event) => {
//                                                             event.preventDefault();
//                                                             deleteCourse(course._id);
//                                                         }}
//                                                         className="btn btn-danger float-end"
//                                                         id="wd-delete-course-click"
//                                                     >
//                                                         Delete
//                                                     </button>
//                                                     <button
//                                                         id="wd-edit-course-click"
//                                                         onClick={(event) => {
//                                                             event.preventDefault();
//                                                             setCourse(course);
//                                                         }}
//                                                         className="btn btn-warning me-2 float-end"
//                                                     >
//                                                         Edit
//                                                     </button>
//                                                 </>
//                                             )}
//                                             {!isFaculty && (
//                                                 <button
//                                                     id={isEnrolled ? "wd-unenroll-course" : "wd-enroll-course"}
//                                                     className={`btn ${isEnrolled ? "btn-danger" : "btn-success"} float-end`}
//                                                     onClick={(event) => {
//                                                         event.preventDefault();
//                                                         isEnrolled ? handleUnenroll(course._id) : handleEnroll(course._id);
//                                                     }}
//                                                 >
//                                                     {isEnrolled ? "Unenroll" : "Enroll"}
//                                                 </button>
//                                             )}
//                                         </div>
//                                     </Link>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleEnrollment } from "../Account/Enrollments/reducer";
import * as userClient from "../Account/client";
import * as courseClient from "../Courses/client";

export default function Dashboard({
  courses,
  enrolledCourses,
  setEnrolledCourses,
  course,
  setCourse,
}: {
  courses: any[];
  enrolledCourses: any[];
  setEnrolledCourses: (courses: any[]) => void;
  course: any;
  setCourse: (course: any) => void;
}) {
  const navigate = useNavigate();
  const [showAllCourses, setShowAllCourses] = useState(false);
  // const [filteredCourses, setFilteredCourses] =
  //   useState<any[]>(enrolledCourses);

  const [filteredCourses, setFilteredCourses] = useState<any[]>([]);

    useEffect(() => {
      // Synchronize filteredCourses with enrolledCourses on state updates
      setFilteredCourses(enrolledCourses);
    }, [enrolledCourses]);


  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const showFilteredCourses = () => {
    showAllCourses
      ? setFilteredCourses(enrolledCourses)
      : setFilteredCourses(courses);
    setShowAllCourses(!showAllCourses);
  };

  const isStudent = currentUser.role === "STUDENT";

  const handleEnrollmentToggle = async (courseId: string) => {
    if (enrolledCourses.some((c) => c._id === courseId)) {
      await userClient
        .unenrollUserFromCourse(currentUser._id, courseId)
        .then(userClient.findMyCourses)
        .then(setEnrolledCourses);
    } else {
      await userClient
        .enrollUserInCourse(currentUser._id, courseId)
        .then(userClient.findMyCourses)
        .then(setEnrolledCourses);
    }
  };

  const deleteCourse = async (courseId: any) => {
    const status = await courseClient.deleteCourse(courseId);
    setEnrolledCourses(enrolledCourses.filter((course) => course._id !== courseId));
  };

  const handleCourseNavigation = (
    e: React.MouseEvent,
    courseId: string,
    to: string
  ) => {
    e.preventDefault();
    if (!isStudent || filteredCourses.some((c) => c._id === courseId)) {
      navigate(to);
    } else {
      alert("You must be enrolled in this course to view its content.");
    }
  };


  const updateCourse = async () => {
    const update = await courseClient.updateCourse(course);

    if (update) {
      enrolledCourses.find((c) => c._id === course._id).name = update.name;
      enrolledCourses.find((c) => c._id === course._id).description =
        update.description;

      setCourse(enrolledCourses.find((c) => c._id === course._id));
    }
  };

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setEnrolledCourses([...enrolledCourses, newCourse]);
  };

  const CourseGrid = ({ course }: { course: any }) => {
    const c = course;
    return (
      <div key={c._id} className="col" style={{ width: "300px" }}>
        <div className="card h-100">
          <img src={course.image} width="100%" height={160} />

          <div className="card-body">
            <h5 className="card-title">{c.name}</h5>
            <p
              className="card-text overflow-hidden"
              style={{ height: "100px" }}
            >
              {c.description}
            </p>

            <div className="d-flex justify-content-between align-items-center">
              <button
                className="btn btn-primary"
                onClick={(e) =>
                  handleCourseNavigation(
                    e,
                    c._id,
                    `/Kanbas/Courses/${c._id}/Home`
                  )
                }
              >
                Go
              </button>


              {isStudent && (
                <>
                  {!enrolledCourses.some((e) => e._id === c._id) &&
                    showAllCourses && (
                      <button
                        className="btn btn-success"
                        onClick={() => handleEnrollmentToggle(c._id)}
                      >
                        Enroll
                      </button>
                    )}
                  {enrolledCourses.some((e) => e._id === c._id) && (
                    <button
                      className="btn btn-danger"
                      onClick={() => handleEnrollmentToggle(c._id)}
                    >
                      Unenroll
                    </button>
                  )}
                </>
              )}

              {currentUser.role === "FACULTY" && (
                <div>
                  <button
                    onClick={() => deleteCourse(c._id)}
                    className="btn btn-danger me-2 float-end"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => setCourse(c)}
                    className="btn btn-warning me-2 float-end"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4" id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {isStudent && (
          <button className="btn btn-primary" onClick={showFilteredCourses}>
            {showAllCourses ? "My Enrollments" : "All Courses"}
          </button>
        )}
      </div>
      <hr />

      {currentUser.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}

      {/* Course List Section */}
      <h2>
        {showAllCourses
          ? "All Available Courses"
          : `${isStudent ? "My Enrolled" : "Published"} Courses`}{" "}
        ({showAllCourses ? courses.length : enrolledCourses.length})
      </h2>
      <hr />

      <div className="row row-cols-1 row-cols-md-5 g-4">
        {showAllCourses
          ? courses.map((c) => <CourseGrid key={c._id} course={c} />)
          : enrolledCourses.map((c) => <CourseGrid key={c._id} course={c} />)}
      </div>
    </div>
  );
}
