import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from 'react-icons/bs';
import AssignmentLessonControlButtons from "./AssignmentLessonControlButtons";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
// import * as db from "../../Database";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";


export default function Assignments() {
  // const assignments = db.assignments;
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === 'FACULTY';

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
                {assignments
                    .filter((assignment: any) => assignment.course === cid)
                    .map((assignment: any) => (

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
                        
                        <AssignmentLessonControlButtons  assignmentID={assignment._id} 
                          deleteAssignment={(assignmentID) => {dispatch(deleteAssignment(assignmentID)); }} />

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


  