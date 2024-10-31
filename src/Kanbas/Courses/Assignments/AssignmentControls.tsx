import { FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";


export default function AssignmentControls() {
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser.role === 'FACULTY';
  
  return (
    <div id="wd-assignment-controls" className="d-flex align-items-center text-nowrap">
      <div className="d-flex align-items-center me-auto position-relative">
          <input
              type="text"
              placeholder="Search..."
              className="form-control me-2 search-input"
              style={{ width: "auto", paddingLeft: "30px" }}
            />
            <IoSearchOutline className="search-icon" />
      </div>

      {/* +Group and +Assignment buttons are only available to Faculty*/}
      {isFaculty && (
      <div>
            <button id="wd-add-assignment-group-btn" className="btn btn-lg btn-secondary me-1">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Group
            </button>

              <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1" 
                    onClick={() => {navigate('new', { relative: 'path' })}} >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
              </button>
        </div>
      )
    }


    </div>

  );
}