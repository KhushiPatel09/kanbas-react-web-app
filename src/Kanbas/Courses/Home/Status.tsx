// export default function CourseStatus() {
//     return (
//       <div id="wd-course-status">
//         <h2>Course Status</h2>
//         <button>Unpublish</button> <button>Publish</button>
//         <br></br><br></br>
//         <button>Import Exisiting Content</button><br></br>
//         <button>Import from Commons</button><br></br>
//         <button>Choose Home Page</button><br></br>
//         <button>View Course Stream</button><br></br>
//         <button>New Announcement</button><br></br>
//         <button>New Analytics</button><br></br>
//         <button>View Course Notifications</button><br></br>
//       </div>
//   );}


import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoMdHome } from "react-icons/io";
import { IoStatsChartSharp } from "react-icons/io5";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaBell } from "react-icons/fa";


export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="ms-4 me-4" style={{ width: "300px"}}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div><br />
      <button className="btn btn-lg btn-secondary w-100 m-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content </button>
      <button className="btn btn-lg btn-secondary w-100 m-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
      {/* Complete the rest of the buttons */}
      <button className="btn btn-lg btn-secondary w-100 m-1 text-start">
      <IoMdHome className="me-2 fs-5" /> Choose Home Page </button>
      <button className="btn btn-lg btn-secondary w-100 m-1 text-start">
      <IoStatsChartSharp className="me-2 fs-5" /> View Course Screen </button>
      <button className="btn btn-lg btn-secondary w-100 m-1 text-start">
      <TfiAnnouncement className="me-2 fs-5" /> New Announcement </button>
      <button className="btn btn-lg btn-secondary w-100 m-1 text-start">
      <IoStatsChartSharp className="me-2 fs-5" /> New Analytics </button>
      <button className="btn btn-lg btn-secondary w-100 m-1 text-start">
      <FaBell className="me-2 fs-5" /> View Course Notifications </button>
    </div>
);}

