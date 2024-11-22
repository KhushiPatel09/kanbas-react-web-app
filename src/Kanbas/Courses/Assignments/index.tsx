import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from 'react-icons/bs';
import AssignmentLessonControlButtons from "./AssignmentLessonControlButtons";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import * as db from "../../Database";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {deleteAssignment, addAssignment } from "./reducer";
import { useState, useEffect } from "react";
import * as assignmentsClient from "./client";


export default function Assignments() {
  const { cid } = useParams();
  const [assignments, setAssignments] = useState([]);

  const fetchAssignments = async () => {
    const a = await assignmentsClient.fetchAssignment(cid);
    setAssignments(a);
  };

  const deleteAssignment = async (assignId: any) => {
    await assignmentsClient.deleteAssignment(assignId);
    fetchAssignments();
  }

  useEffect(() => {
    fetchAssignments();
  }, []);

  const navigate = useNavigate();

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === 'FACULTY';

  // const assignments = db.assignments;
  // const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  // const dispatch = useDispatch();

  // const createAssignmentForCourse = async () => {
  //   if (!cid) return;
  //   const newAssignment = { title: assignmentTitle, course: cid };
  //   const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
  //   dispatch(addAssignment(assignment));
  // };

  // const fetchAssignments = async () => {
  //   const assignments = await coursesClient.findAssignmentForCourse(cid as string);
  //   dispatch(setAssignments(assignments));
  // };
  // useEffect(() => {
  //   fetchAssignments();
  // }, []);

 

    return (
      <div>
          <AssignmentControls/><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
              <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center"> 
                <BsGripVertical className="me-2 fs-3" />
                <IoMdArrowDropdown className="me-2 fs-3" />
                <b>ASSIGNMENTS </b>
                <div className="ms-auto">
                <AssignmentControlButtons />
                </div>
                </div>
                <ul className="wd-lessons list-group rounded-0">
                {assignments.map((assignment: any) => (

                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <div className="row">
                      <div className="col-1 d-flex justify-content-center align-items-center">
                          <BsGripVertical className="me-2 fs-3" />
                          <HiMiniPencilSquare className="me-2 fs-3 text-success" />
                      </div>
                      <div className="col-7">
                        
                        {/* Assignment edit option is only available to Faculty*/}
                        {isFaculty && (
                            <a className="wd-assignment-link"
                              href = {`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                              <b>{assignment.title}</b> <br></br>
                            </a>
                        )
                      }

                      {/* Assignment edit option is only available to Faculty*/}
                      {!isFaculty && (
                        <div className="wd-assignment-link"><b>{assignment.title}</b></div>
                      )
                    }

                        <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | <br></br>
                        <b>Due</b> May 20 at 11:59pm | {assignment.points}
                      </div>
                      <div className="col-4 d-flex justify-content-end align-items-center">
                        
                        {/* <AssignmentLessonControlButtons  assignmentID={assignment._id} 
                          deleteAssignment={(assignmentID) => {dispatch(deleteAssignment(assignmentID)); }} /> */}
                        <AssignmentLessonControlButtons  key={assignment._id} assignmentID={assignment._id}
                          deleteAssignment = {deleteAssignment}  />

                      </div>
                    </div>
                  </li>
                    )
                  )
                }
                </ul>
              </li>
            </ul>
        </div>
          
  );}


  