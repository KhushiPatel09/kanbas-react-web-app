import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";


export default function AssignmentControls() {
  return (
    <div>
      <button id="wd-assignment-weightage-btn" className="btn btn-lg me-1 rounded-pill" 
            style={{
                backgroundColor: "#d4d4d4", 
                borderColor: "#000000", 
                color: "#000"
            }}>
        40% of Total</button>
      <FaPlus className="position-relative me-2 fs-4" style={{ bottom: "1px" }} />
      <IoEllipsisVertical className="fs-4 me-2 "  />
    </div>
  );
}