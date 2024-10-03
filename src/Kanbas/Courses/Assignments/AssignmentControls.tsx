import { FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";


export default function AssignmentControls() {
  return (
    <div id="wd-assignment-controls" className="d-flex align-items-center text-nowrap">
      <div className="d-flex align-items-center me-auto position-relative">
        {/* <span>
          <IoSearchOutline className="position-relative me-2" style={{ bottom: "1px" }} />
        </span>
        <input type="text" placeholder="Search..." className="form-control me-2"  style={{ width: "auto" }} /> */}
          <input
              type="text"
              placeholder="Search..."
              className="form-control me-2 search-input"
              style={{ width: "auto", paddingLeft: "30px" }}
            />
            <IoSearchOutline className="search-icon" />
      </div>

      <button id="wd-add-assignment-group-btn" className="btn btn-lg btn-secondary me-1">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>

      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
    </div>

  );
}