import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course  col" style={{width: "300px"}}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title"> CS1234 React JS </h5>
                      <p className="wd-dashboard-course-title card-text">Full Stack software developer</p>
                      <button className="btn btn-primary"> Go </button>
                    </div>
              </Link>
            </div>
          </div>
        <div className="wd-dashboard-course col" style={{width: "300px"}}> 
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/machinelearning.png" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">CS6140 Machine Learning </h5>
                      <p className="wd-dashboard-course-title card-text">Machine Learning A-Z</p>
                      <button className="btn btn-primary"> Go </button>
                    </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{width: "300px"}}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
              <img src="/images/information-retrieval.jpg" width="100%" height={160} />
                   <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">CS6200 Info Retrieval </h5>
                      <p className="wd-dashboard-course-title card-text">Building Search Engine</p>
                      <button className="btn btn-primary"> Go </button>
                    </div> 
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{width: "300px"}}> 
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
              <img src="/images/nlp.png" width="100%" height={160} />
                <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">CS6200 NLP </h5>
                      <p className="wd-dashboard-course-title card-text">Getting started with LLMs</p>
                      <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{width: "300px"}}>
          <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/database.png" width="100%" height={160} />
                  <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">CS6200 DBMS </h5>
                        <p className="wd-dashboard-course-title card-text">Relational & Non-relational databases</p>
                        <button className="btn btn-primary"> Go </button>
                  </div>
              </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{width: "300px"}}> 
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                  <img src="/images/fai.jpg" width="100%" height={160} />
                    <div className="card-body">
                          <h5 className="wd-dashboard-course-title card-title">CS4150 Artificial Intelligence </h5>
                          <p className="wd-dashboard-course-title card-text">Maths behind Artificial Intelligence</p>
                          <button className="btn btn-primary"> Go </button>
                    </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{width: "300px"}}>
          <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                    <img src="/images/datascience.jpg" width="100%" height={160} />
                      <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">CS5500 Data Science & Mining</h5>
                            <p className="wd-dashboard-course-title card-text">Data Science from scratch</p>
                            <button className="btn btn-primary"> Go </button>
                      </div>
              </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

