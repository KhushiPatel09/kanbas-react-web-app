import { Link, useParams, useLocation } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  // const { cid } = useParams();
  const { pathname } = useLocation();
  // const assignments = db.assignments;
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const assignment = db.assignments.find((item) => item._id === aid);

    return (

    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br />
      <input id="wd-name" defaultValue = {assignment?.title} className="form-control mb-3" />

      <div id="wd-description" className="form-control mb-3" contentEditable
        style={{ minHeight: "200px", width: "100%", resize: "none", overflow: "auto" }}>
        The assignment is <span className="text-danger">available online</span> <br /><br />{assignment?.description[0]}<br />
        <br />{assignment?.description[1]}
        <ul>
          <li>{assignment?.description[2]}</li>
          <li>{assignment?.description[3]}</li>
          <li>{assignment?.description[4]}</li>
        </ul>
      </div>

      <div className="row mb-3">
        <div className="col-5 text-end">
          <label htmlFor="wd-points">Points</label>
        </div>
        <div className="col-7">
          <input id="wd-points" defaultValue={assignment?.points} className="form-control" />
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
            <input type="date" id="wd-due-date" defaultValue={assignment?.dueDate} className="form-control" />
            <br></br>
            
            <div className="row">
              <div className="col-6">
                  <label htmlFor="wd-available-from"><b>Available from</b></label>
                  <input type="date" id="wd-available-from" defaultValue={assignment?.availableDate} className="form-control" />
              </div>
              <div className="col-6">
                  <label htmlFor="wd-available-until"><b>Until</b></label>
                  <input type="date" id="wd-available-until" defaultValue={assignment?.availableUntilDate} className="form-control" />
              </div>
            </div>
        </div>
        </div>

      <hr />

      <div className="row">
        <div className="col-5"></div>
        <div className="col-7 text-end">
              <Link to = {`/Kanbas/Courses/${cid}/Assignments`} id="wd-course-home-link">
                  <button id="" type="button" className="btn btn-secondary me-2">Cancel</button>
              </Link>
              <Link to = {`/Kanbas/Courses/${cid}/Assignments`} id="wd-course-home-link">
                  <button id="" type="button" className="btn btn-danger">Save</button>
              </Link>
        </div>
      </div>
    </div>
);
}

  