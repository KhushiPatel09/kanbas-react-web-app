export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br></br>
        <input id="wd-name" value="A1 - ENV + HTML" /><br/><br/>
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />

      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        {/* Complete on your own */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
            <option value="PERCENTAGE">Percentage</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
                <option value="Online">Online</option>
            </select>
            <br></br><br></br>
            <label>Online Entry Options</label><br/>
                <input type="checkbox" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>
                <input type="checkbox" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>
                <input type="checkbox" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
                <input type="checkbox" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
                <input type="checkbox" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label><br/>
            <br></br>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br></br><input id="wd-assign-to" value="Everyone" />
            <br></br><br></br>
            <label htmlFor="wd-due-date">Due</label>
            <br></br><input type="date" id="wd-due-date" value="2000-01-21"/>
            <br></br><br></br>
            <tr>
                <td>
                    <label htmlFor="wd-available-from">Available from</label>
                </td>
                <td>
                    <label htmlFor="wd-available-until">Until</label>
                </td>
            </tr>
            <tr>
                <td><input type="date" id="wd-available-from" value="2000-01-21"/></td>
                <td><input type="date" id="wd-available-until" value="2000-01-21"/></td>
            </tr>
            <hr></hr>
            <tr>
                <td width="57%"></td>
                <td align="right">
                        <button id="" type="button">Cancel</button>
                        <button id="" type="button">Save</button>
                </td>
            </tr>
        </td>
        </tr>
      </table>
    </div>
);}

  