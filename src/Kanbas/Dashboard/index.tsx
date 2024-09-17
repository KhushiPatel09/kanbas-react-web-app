import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
            Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
            <img src="/images/machinelearning.png" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
                CS6140 Machine Learning
                </Link>
                <p className="wd-dashboard-course-title">
                Machine Learning A-Z
                </p>
                <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course">
            <img src="/images/information-retrieval.jpg" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
                CS6200 Information Retrieval
                </Link>
                <p className="wd-dashboard-course-title">
                Building Search Engine
                </p>
                <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course"> 
            <img src="/images/nlp.png" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
                CS6000 Natural Language Processing
                </Link>
                <p className="wd-dashboard-course-title">
                Getting started with LLMs
                </p>
                <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course">
            <img src="/images/database.png" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
                CS4500 Database Management
                </Link>
                <p className="wd-dashboard-course-title">
                Relational & Non-relational databases
                </p>
                <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course"> 
            <img src="/images/fai.jpg" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
                CS4150 Foundation of Artificial Intelligence
                </Link>
                <p className="wd-dashboard-course-title">
                Maths behind Artificial Intelligence
                </p>
                <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course">
            <img src="/images/datascience.jpg" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
                CS5500 Data Science
                </Link>
                <p className="wd-dashboard-course-title">
                Data Science from scratch
                </p>
                <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

