export default function Modules() {
    return (
      <div>
        {/* Implement Collapse All button, View Progress button, etc. */}
        <button id="wd-module-button" type="button">Collapse All</button>
        <button id="wd-module-button" type="button">View Progress</button>
        {/* <label htmlFor="wd-module-button"> Select dropdown value: </label><br/> */}
        <select id="wd-select-publish-value">
        <option value="Publish All">Publish All</option>
        </select>
        <button id="wd-module-button" type="button">+ Module</button>
        <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
);}
