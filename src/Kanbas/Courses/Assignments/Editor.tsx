export default function AssignmentEditor() {
    return (
    //   <div id="wd-assignments-editor">
    //     <label htmlFor="wd-name">Assignment Name</label><br></br>
    //     <input id="wd-name" value="A1" /><br/><br/>

    //       <div 
    //         id="wd-description" 
    //         contentEditable 
    //         className="form-control" 
    //         style={{ minHeight: "200px", width: "100%", resize: "none", overflow: "auto" }}
    //       >
    //         The assignment is <span className="text-danger">available online</span> <br></br> <br></br>Submit a link to the landing page of your Web application running on Netlify.<br></br>
    //         <br></br>The landing page should include the following:
    //         <ul>
    //           <li>Your full name and section</li>
    //           <li>Links to each of the lab assignments</li>
    //           <li>Link to the Kanbas application</li>
    //           <li>Links to all relevant source code repositories</li>
    //         </ul>
    //         The Kanbas application should include a link to navigate back to the landing page.
    //       </div>

    //     <br />

    //   <table>
    //     <tr>
    //       <td align="right" valign="top">
    //         <label htmlFor="wd-points">Points</label>
    //       </td>
    //       <td>
    //         <input id="wd-points" value={100} />
    //       </td>
    //     </tr>
    //     <tr>
    //       <td align="right" valign="top">
    //         <label htmlFor="wd-group">Assignment Group</label>
    //       </td>
    //       <td>
    //         <select id="wd-group">
    //         <option value="ASSIGNMENTS">ASSIGNMENTS</option>
    //         </select>
    //       </td>
    //     </tr>
    //     <tr>
    //       <td align="right" valign="top">
    //         <label htmlFor="wd-display-grade-as">Display Grade as</label>
    //       </td>
    //       <td>
    //         <select id="wd-display-grade-as">
    //         <option value="PERCENTAGE">Percentage</option>
    //         </select>
    //       </td>
    //     </tr>
    //     <tr>
    //       <td align="right" valign="top">
    //         <label htmlFor="wd-submission-type">Submission Type</label>
    //       </td>
    //       <td>
    //         <select id="wd-submission-type">
    //             <option value="Online">Online</option>
    //         </select>
    //         <br></br><br></br>
    //         <label>Online Entry Options</label><br/>
    //             <input type="checkbox" id="wd-text-entry"/>
    //             <label htmlFor="wd-text-entry">Text Entry</label><br/>
    //             <input type="checkbox" id="wd-website-url"/>
    //             <label htmlFor="wd-website-url">Website URL</label><br/>
    //             <input type="checkbox" id="wd-media-recordings"/>
    //             <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
    //             <input type="checkbox" id="wd-student-annotation"/>
    //             <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
    //             <input type="checkbox" id="wd-file-upload"/>
    //             <label htmlFor="wd-file-upload">File Uploads</label><br/>
    //         <br></br>
    //         <label htmlFor="wd-assign-to">Assign to</label>
    //         <br></br><input id="wd-assign-to" value="Everyone" />
    //         <br></br><br></br>
    //         <label htmlFor="wd-due-date">Due</label>
    //         <br></br><input type="date" id="wd-due-date" value="2000-01-21"/>
    //         <br></br><br></br>
    //         <tr>
    //             <td>
    //                 <label htmlFor="wd-available-from">Available from</label>
    //             </td>
    //             <td>
    //                 <label htmlFor="wd-available-until">Until</label>
    //             </td>
    //         </tr>
    //         <tr>
    //             <td><input type="date" id="wd-available-from" value="2000-01-21"/></td>
    //             <td><input type="date" id="wd-available-until" value="2000-01-21"/></td>
    //         </tr>
    //         <hr></hr>
    //         <tr>
    //             <td width="57%"></td>
    //             <td align="right">
    //                     <button id="" type="button">Cancel</button>
    //                     <button id="" type="button">Save</button>
    //             </td>
    //         </tr>
    //     </td>
    //     </tr>
    //   </table>
    // </div>

    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br />
      <input id="wd-name" defaultValue="A1" className="form-control mb-3" />

      <div id="wd-description" className="form-control mb-3" contentEditable
        style={{ minHeight: "200px", width: "100%", resize: "none", overflow: "auto" }}>
        The assignment is <span className="text-danger">available online</span> <br /><br />Submit a link to the landing page of your Web application running on Netlify.<br />
        <br />The landing page should include the following:
        <ul>
          <li>Your full name and section</li>
          <li>Links to each of the lab assignments</li>
          <li>Link to the Kanbas application</li>
          <li>Links to all relevant source code repositories</li>
        </ul>
        The Kanbas application should include a link to navigate back to the landing page.
      </div>

      <div className="row mb-3">
        <div className="col-5 text-end">
          <label htmlFor="wd-points">Points</label>
        </div>
        <div className="col-7">
          <input id="wd-points" defaultValue={100} className="form-control" />
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
            <input type="date" id="wd-due-date" defaultValue="2000-01-21" className="form-control" />
            <br></br>
            
            <div className="row">
              <div className="col-6">
                  <label htmlFor="wd-available-from"><b>Available from</b></label>
                  <input type="date" id="wd-available-from" defaultValue="2000-01-21" className="form-control" />
              </div>
              <div className="col-6">
                  <label htmlFor="wd-available-until"><b>Until</b></label>
                  <input type="date" id="wd-available-until" defaultValue="2000-01-21" className="form-control" />
              </div>
            </div>
        </div>
        </div>

      <hr />

      <div className="row">
        <div className="col-5"></div>
        <div className="col-7 text-end">
          <button id="" type="button" className="btn btn-secondary me-2">Cancel</button>
          <button id="" type="button" className="btn btn-danger">Save</button>
        </div>
      </div>
    </div>
);

}

  