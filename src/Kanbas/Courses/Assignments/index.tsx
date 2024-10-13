import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from 'react-icons/bs';
import LessonControlButtons from "../Modules/LessonControlButtons";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import { useParams } from "react-router";
import * as db from "../../Database";


export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
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
                        <a className="wd-assignment-link"
                          href = {`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                          <b>{assignment.title}</b> <br></br>
                        </a>
                        <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | <br></br>
                        <b>Due</b> May 20 at 11:59pm | {assignment.points}
                      </div>
                      <div className="col-4 d-flex justify-content-end align-items-center">
                        <LessonControlButtons />
                      </div>
                    </div>
                  </li>
                    )
                  )
                }
                  {/* <li className="wd-lesson list-group-item p-3 ps-1">
                  <div className="row">
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <HiMiniPencilSquare className="me-2 fs-3 text-success" />
                    </div>
                    <div className="col-7">
                     <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/123">
                        <b>A2</b> <br></br>
                      </a>
                      <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | <br></br>
                      <b>Due</b> May 20 at 11:59pm | 100 pts
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                      <LessonControlButtons />
                    </div>
                  </div>
                  </li>
                  <li className="wd-lesson list-group-item p-3 ps-1">
                  <div className="row">
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <HiMiniPencilSquare className="me-2 fs-3 text-success" />
                    </div>
                    <div className="col-7">
                      <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/123">
                        <b>A3</b> <br></br>
                      </a>
                      <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | <br></br>
                      <b>Due</b> May 27 at 11:59pm | 100 pts
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                      <LessonControlButtons />
                    </div>
                  </div>
                  </li> */}
                </ul>
              </li>
            </ul>
        </div>
          
  );}
  