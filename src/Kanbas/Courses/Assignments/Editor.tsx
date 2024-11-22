import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import * as assignmentsClient from "./client";


export default function AssignmentEditor() {

  const { cid, aid } = useParams();
  const navigate = useNavigate();
  // const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();


  // const [assignment, setAssignment] = useState(() => {
  //     const existingAssignment = assignments.find((assignment: any) => assignment._id === aid);
  //     return existingAssignment ? { ...existingAssignment } : { course: cid, title: '', description: '', points: '', dueDate: '', availableDate: '', availableUntilDate: '' };
  // });

  const [assignment, setAssignment] = useState({
    course: cid,
    title: "",
    description: "",
    points: "",
    dueDate: "",
    availableDate: "",
    availableUntilDate: "",
  });

  const fetchAssignmentById = async () => {
    const assignment = await assignmentsClient.fetchAssignmentById(cid, aid);
    setAssignment(assignment);
  };
  useEffect(() => {
    fetchAssignmentById();
  }, []);


  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";


  const updateAssignment = async (assignment: any) => {
    const updatedAssignment = await assignmentsClient.updateAssignment(
      assignment
    );
    setAssignment(updatedAssignment);
  };

  const createAssignment = async (courseId: any, assignment: any) => {
    const newAssignment = await assignmentsClient.createAssignment(
      courseId,
      assignment
    );
    setAssignment(newAssignment);
  };
  
  const handleEdit = () => {
      navigate(-1);
  };
  
  // const handleSave = () => {
  //     if (assignment._id) {
  //         dispatch(updateAssignment(assignment));
  //     } else {
  //         dispatch(addAssignment(assignment));
  //     }
  //     handleEdit();
  // };

  const handleSave = () => {
    console.log("Save button clicked");

    if (!assignment.title) {
      alert("Assignment title is required");
      return;
    }
    try {
      console.log("Printing aid.....")
      console.log(aid)
      if (aid !== "new") {
        updateAssignment(assignment);
      } else {
        createAssignment(cid, assignment);
      }
      handleEdit();
    } catch (error) {
      alert("Error saving assignment. Please try again.");
    }
  };


  const handleCancel = () => {
      handleEdit();
  }


    return (
        <div id="wd-assignments-editor">
          <label htmlFor="wd-name">Assignment Name</label><br />
          <input id="wd-name" value = {assignment.title} className="form-control mb-3" 
                onChange={(e) => { setAssignment({ ...assignment, title: e.target.value }) }}/>

          <div id="wd-description" className="form-control mb-3" contentEditable
            style={{ minHeight: "200px", width: "100%", resize: "none", overflow: "auto" }}>

              <textarea id="wd-description" className="form-control mt-2" cols={25} rows={10} value={assignment.description}
                        onChange={(e) => { setAssignment({ ...assignment, description: e.target.value }) }}>
              </textarea>
          </div>

          <div className="row mb-3">
            <div className="col-5 text-end">
              <label htmlFor="wd-points">Points</label>
            </div>
            <div className="col-7">
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
                <input id="wd-due-date" className="form-control" type="date" value= {assignment.dueDate}
                      onChange={(e) => { setAssignment({ ...assignment, dueDate: e.target.value }) }} />
                <br></br>
                
                <div className="row">
                  <div className="col-6">
                      <label htmlFor="wd-available-from"><b>Available from</b></label>
                      <input id="wd-available-from" className="form-control" type="date" value={assignment.availableDate}
                              onChange={(e) => { setAssignment({ ...assignment, availableDate: e.target.value }) }} />
                  </div>
                  <div className="col-6">
                      <label htmlFor="wd-available-until"><b>Until</b></label>
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
                  <button id="wd-cancel" className="btn btn-secondary me-2" onClick={() => { handleCancel() }}>Cancel</button>
                  <button id="wd-save" className="btn btn-danger" onClick={() => { handleSave() }}>Save</button>
            </div>
          </div>
        </div>
);
}
