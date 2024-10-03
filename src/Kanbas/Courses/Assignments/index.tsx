import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from 'react-icons/bs';
import LessonControlButtons from "../Modules/LessonControlButtons";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";



export default function Assignments() {
    return (
      // <div id="wd-assignments">
      //   <input id="wd-search-assignment"
      //          placeholder="Search for Assignments" />
      //   <button id="wd-add-assignment-group">+ Group</button>
      //   <button id="wd-add-assignment">+ Assignment</button>
      //   <h3 id="wd-assignments-title">
      //     ASSIGNMENTS 40% of Total <button>+</button>
      //   </h3>
      //   <ul id="wd-assignment-list">
      //     <li className="wd-assignment-list-item">
      //       <a className="wd-assignment-link"
      //         href="#/Kanbas/Courses/1234/Assignments/123">
      //         A1 - ENV + HTML
      //       </a>
      //       <br></br>Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts
      //     </li>
      //     <li className="wd-assignment-list-item">
      //       <a className="wd-assignment-link"
      //         href="#/Kanbas/Courses/1234/Assignments/123">
      //         A2 - CSS + BOOTSTRAP
      //       </a>
      //       <br></br>Multiple Modules | <b>Not available until</b> May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts
      //     </li>
      //     <li className="wd-assignment-list-item">
      //       <a className="wd-assignment-link"
      //         href="#/Kanbas/Courses/1234/Assignments/123">
      //         A3 - JAVASCRIPT + REACT
      //       </a>
      //       <br></br>Multiple Modules | <b>Not available until</b> May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts
      //     </li>
      //   </ul>
      // </div>


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
                  <li className="wd-lesson list-group-item p-3 ps-1">
                  <div className="row">
                    {/* <div className="col-1  justify-content-center align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <HiMiniPencilSquare className="me-2 fs-3 text-success" />
                    </div> */}
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <HiMiniPencilSquare className="me-2 fs-3 text-success" />
                    </div>
                    <div className="col-7">
                      <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/123">
                        <b>A1</b> <br></br>
                      </a>
                      <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <br></br>
                      <b>Due</b> May 13 at 11:59pm | 100 pts
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
                  </li>
                </ul>
              </li>
            </ul>
        </div>
          
  );}
  