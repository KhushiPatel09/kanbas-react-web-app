import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from 'react-icons/bs';




export default function Modules() {
    return (
      // <div>
      //   {/* Implement Collapse All button, View Progress button, etc. */}

      //   {/* <button id="wd-module-button" type="button">Collapse All</button>
      //   <button id="wd-module-button" type="button">View Progress</button> */}

        // {/* <label htmlFor="wd-module-button"> Select dropdown value: </label><br/> */}
        // {/* <select id="wd-select-publish-value">
        // <option value="Publish All">Publish All</option>
        // </select>
        // <button id="wd-module-button" type="button">+ Module</button>
        // <div> */}

          
          // {/* <ModulesControls /><br /><br /><br /><br />
          // <ul id="wd-modules" className="list-group rounded-0">
          // <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          //   <div className="wd-title p-3 ps-2 bg-secondary">
          //   <BsGripVertical className="me-2 fs-3" />
          //     Week 1
          //   <ModulesControls />
          //   </div>
          //   <ul className="wd-lessons list-group rounded-0">
          //     <li className="wd-lesson list-group-item p-3 ps-1">
          //       LEARNING OBJECTIVES
          //       <BsGripVertical className="me-2 fs-3" />
          //       {/* <span className="wd-title">LEARNING OBJECTIVES</span> */}
          //       {/* <LessonControlButtons />
        //       </li>
        //         <ul className="wd-content">
        //           <li className="wd-content-item list-group-item p-3 ps-1">
        //           <BsGripVertical className="me-2 fs-3" />
        //             Introduction to the course
        //           <LessonControlButtons />
        //           </li>
        //           <li className="wd-content-item list-group-item p-3 ps-1">
        //           <BsGripVertical className="me-2 fs-3" />
        //           Learn what is Web Development
        //           <LessonControlButtons />
        //           </li>
        //         </ul>
        //     </ul>
        //   </li>
        //   <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        //     <div className="wd-title p-3 ps-2 bg-secondary">
        //     <BsGripVertical className="me-2 fs-3" />
        //     Week 2</div>
        //     <ModulesControls />
        //     <ul className="wd-lessons list-group rounded-0">
        //       <li className="wd-lesson list-group-item p-3 ps-1">
        //       <BsGripVertical className="me-2 fs-3" />
        //         <span className="wd-title">LEARNING OBJECTIVES</span>
        //         <LessonControlButtons />
        //       </li>
        //       <li className="wd-lesson list-group-item p-3 ps-1"> 
        //       <BsGripVertical className="me-2 fs-3" />
        //       LESSON 1 
        //       <LessonControlButtons />
        //       </li>
        //       <li className="wd-lesson list-group-item p-3 ps-1"> 
        //       <BsGripVertical className="me-2 fs-3" />
        //       LESSON 2 
        //       <LessonControlButtons />
        //       </li>
        //     </ul>
        //   </li>
        // </ul> */}
        <div>
          <ModulesControls /><br></br>
            <ul id="wd-modules" className="list-group rounded-0">
              <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary"> 
                <BsGripVertical className="me-2 fs-3" />
                Week 1 
                <ModuleControlButtons />
                </div>
                <ul className="wd-lessons list-group rounded-0">
                  <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                    LEARNING OBJECTIVES 
                  <LessonControlButtons />
                  </li>
                  <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                    Introduction to the course 
                  <LessonControlButtons />
                  </li>
                  <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  Learn what is Web Development 
                  <LessonControlButtons />
                  </li>
                  <li className="wd-lesson list-group-item p-3 ps-1"> 
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 1 
                  <LessonControlButtons /></li>
                  <li className="wd-lesson list-group-item p-3 ps-1"> 
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 2 
                  <LessonControlButtons /></li>
                </ul>
              </li>
              <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary"> 
                <BsGripVertical className="me-2 fs-3" />
                  Week 2 
                <ModuleControlButtons />
                </div>
                <ul className="wd-lessons list-group rounded-0">
                  <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                    LEARNING OBJECTIVES 
                  <LessonControlButtons /></li>
                  <li className="wd-lesson list-group-item p-3 ps-1"> 
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 1 
                  <LessonControlButtons />
                  </li>
                  <li className="wd-lesson list-group-item p-3 ps-1"> 
                  <BsGripVertical className="me-2 fs-3" />LESSON 2 
                  <LessonControlButtons />
                  </li>
                </ul>
              </li>
            </ul>
    </div>
);}
