import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import DeleteAssignmentDialog from "./DeleteAssignmentDialog";
import { useSelector } from "react-redux";

export default function AssignmentLessonControlButtons(
    {assignmentID, deleteAssignment} : {assignmentID: String, deleteAssignment: (assignmentID: String) => void;}
)
{
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === 'FACULTY';

  return (
    <div className="float-end">

      {/* Delete Assignment button is only available to Faculty*/}
      {isFaculty && (
        <span>
          <FaTrash className="text-danger mt-1 me-4 mb-1" data-bs-toggle="modal" data-bs-target={`#wd-delete-module-dialog-${assignmentID}`}/>
          <DeleteAssignmentDialog assignmentID={assignmentID} deleteAssignment={deleteAssignment}/>
        </span>
      )
    }
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}


