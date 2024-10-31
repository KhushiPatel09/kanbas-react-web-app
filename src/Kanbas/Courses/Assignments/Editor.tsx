import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";


export default function AssignmentEditor() {
  // const { cid } = useParams();
  // const { pathname } = useLocation();
  // const assignments = db.assignments;
  // const assignment = db.assignments.find((item) => item._id === aid);
  // const { cid, aid } = useParams<{ cid: string; aid: string }>();

  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const [assignment, setAssignment] = useState(() => {
      const existingAssignment = assignments.find((assignment: any) => assignment._id === aid);
      return existingAssignment ? { ...existingAssignment } : { course: cid, title: '', description: '', points: '', dueDate: '', availableDate: '', availableUntilDate: '' };
  });
  const dispatch = useDispatch();
  const handleEdit = () => {
      navigate(-1);
  };
  const handleSave = () => {
      if (assignment._id) {
          dispatch(updateAssignment(assignment));
      } else {
          dispatch(addAssignment(assignment));
      }
      handleEdit();
  };
  const handleCancel = () => {
      handleEdit();
  }


    return (
        <div id="wd-assignments-editor">
          <label htmlFor="wd-name">Assignment Name</label><br />
          {/* <input id="wd-name" defaultValue = {assignment?.title} className="form-control mb-3" /> */}
          <input id="wd-name" value = {assignment.title} className="form-control mb-3" 
                onChange={(e) => { setAssignment({ ...assignment, title: e.target.value }) }}/>

          <div id="wd-description" className="form-control mb-3" contentEditable
            style={{ minHeight: "200px", width: "100%", resize: "none", overflow: "auto" }}>
            {/* The assignment is <span className="text-danger">available online</span> <br /><br />{assignment?.description[0]}<br />
            <br />{assignment?.description[1]}
            <ul>
              <li>{assignment?.description[2]}</li>
              <li>{assignment?.description[3]}</li>
              <li>{assignment?.description[4]}</li>
            </ul> */}
              <textarea id="wd-description" className="form-control mt-2" cols={25} rows={10} 
                        onChange={(e) => { setAssignment({ ...assignment, description: e.target.value }) }}>
                        {assignment.description[0]}
              </textarea>
          </div>

          <div className="row mb-3">
            <div className="col-5 text-end">
              <label htmlFor="wd-points">Points</label>
            </div>
            <div className="col-7">
              {/* <input id="wd-points" defaultValue={assignment?.points} className="form-control" /> */}
              <input id="wd-points" className="form-control"  
                      onChange={(e) => { setAssignment({ ...assignment, points: e.target.value }) }} />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-5 text-end">
              <label htmlFor="wd-group">Assignment Group</label>
            </div>
            <div className="col-7">
              <select id="wd-group" className="form-select">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-5 text-end">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </div>
            <div className="col-7">
              <select id="wd-display-grade-as" className="form-select">
                <option value="PERCENTAGE">Percentage</option>
              </select>
            </div>
          </div>
      
              <div className="row mb-3">
                <div className="col-5 text-end">
                  <label htmlFor="wd-submission-type">Submission Type</label>
                </div>
                <div className="col-7 bordered">
                    <select id="wd-submission-type" className="form-select">
                      <option value="Online">Online</option>
                    </select>
                    <br></br>

                  <label><b>Online Entry Options</b></label><br />
                  <input type="checkbox" id="wd-text-entry" className="me-2"/>
                  <label htmlFor="wd-text-entry">Text Entry</label><br />
                  <input type="checkbox" id="wd-website-url" className="me-2"/>
                  <label htmlFor="wd-website-url">Website URL</label><br />
                  <input type="checkbox" id="wd-media-recordings" className="me-2"/>
                  <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                  <input type="checkbox" id="wd-student-annotation" className="me-2"/>
                  <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                  <input type="checkbox" id="wd-file-upload" className="me-2"/>
                  <label htmlFor="wd-file-upload">File Uploads</label><br />

                </div>
              </div>
            

          <div className="row mb-3">
            <div className="col-5 text-end">
              <label htmlFor="wd-assign-to">Assign</label>
            </div>
              <div className="col-7 bordered">
                <label><b>Assign to</b></label><br />
                <input id="wd-assign-to" defaultValue="Everyone" className="form-control" />

                <br></br>
                <label htmlFor="wd-due-date"><b>Due</b></label>
                {/* <input type="date" id="wd-due-date" defaultValue={assignment?.dueDate} className="form-control" /> */}
                <input id="wd-due-date" className="form-control" type="date" value= {assignment.dueDate}
                      onChange={(e) => { setAssignment({ ...assignment, dueDate: e.target.value }) }} />
                <br></br>
                
                <div className="row">
                  <div className="col-6">
                      <label htmlFor="wd-available-from"><b>Available from</b></label>
                      {/* <input type="date" id="wd-available-from" defaultValue={assignment?.availableDate} className="form-control" /> */}
                      <input id="wd-available-from" className="form-control" type="date" value={assignment.availableDate}
                              onChange={(e) => { setAssignment({ ...assignment, availableDate: e.target.value }) }} />
                  </div>
                  <div className="col-6">
                      <label htmlFor="wd-available-until"><b>Until</b></label>
                      {/* <input type="date" id="wd-available-until" defaultValue={assignment?.availableUntilDate} className="form-control" /> */}
                      <input id="wd-available-until" className="form-control" type="date" value={assignment.availableUntilDate}
                            onChange={(e) => { setAssignment({ ...assignment, availableUntilDate: e.target.value }) }} />
                  </div>
                </div>
            </div>
            </div>

          <hr />

          <div className="row">
            <div className="col-5"></div>
            <div className="col-7 text-end">
                  {/* <Link to = {`/Kanbas/Courses/${cid}/Assignments`} id="wd-course-home-link">
                      <button id="" type="button" className="btn btn-secondary me-2">Cancel</button>
                  </Link>
                  <Link to = {`/Kanbas/Courses/${cid}/Assignments`} id="wd-course-home-link">
                      <button id="" type="button" className="btn btn-danger">Save</button>
                  </Link> */}
                  <button id="wd-cancel" className="btn btn-secondary me-2" onClick={() => { handleCancel() }}>Cancel</button>
                  <button id="wd-save" className="btn btn-danger" onClick={() => { handleSave() }}>Save</button>
            </div>
          </div>
        </div>
);
}
