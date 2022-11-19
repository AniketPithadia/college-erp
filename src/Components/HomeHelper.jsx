import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../Style/facultyStudentLogin.css";
import hamburgerIcon from "../Style/Images/icons8-menu-50.svg";
import { studentLogout } from "../redux/action/studentAction";
import "../Style/facultyStudentLogin.css";

const Home = () => {
  const history = useHistory();
  const store = useSelector((store) => store);
  const [name, setName] = useState("");
  useEffect(() => {
    if (store.student.student.student.name) {
      setName(store.student.student.student.name);
    }
  }, [store.student.student.student.name]);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(studentLogout());
    history.push("/");
  };
  return (
    <div className="container-fluid m-0 p-0 ">
      <div className="row ">
        <div className="col">
          <nav className="navbar navbar-expand-lg facultyNav d-flex align-items-center justify-content-between p-3 ">
            <h4 className="navbar-brand logoNav" href="">
              LDRP
            </h4>

            <Link
              to="/home"
              className="text-decoration-none z100 d-none d-lg-block"
            >
              <button
                type="button"
                className="btn linkHover z100 linkHover justifySelf"
              >
                {name.toUpperCase()}
              </button>
            </Link>

            <button
              className="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" style={{ color: "white" }}>
                <img src={hamburgerIcon} alt="" className="hamburgerIcon" />
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav align-items-end">
                <li className="nav-item d-md-block d-lg-none">
                  <Link to="/home" className="text-decoration-none z100">
                    <button
                      type="button"
                      className="btn linkHover z100 linkHover justifySelf"
                    >
                      {name.toUpperCase()}
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn linkHover">
                    <Link
                      to="/student/updateProfile"
                      className="text-decoration-none linkHover"
                    >
                      <li>UPDATE PROFILE</li>
                    </Link>
                  </button>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-decoration-none linkHover"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    ACADEMIC{" "}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      className="dropdown-item"
                      to="/student/testPerformance"
                    >
                      Test Performance
                    </Link>
                    <Link className="dropdown-item" to="/student/attendence">
                      Attendance
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/student/getAllSubjects"
                    >
                      Student Subject List
                    </Link>
                  </div>
                </li>

                <li className="nav-item">
                  <button type="button" className="btn linkHover">
                    <Link
                      to="/student/updatePassword"
                      className="text-decoration-none linkHover"
                    >
                      <li>UPDATE PASSWORD</li>
                    </Link>
                  </button>
                </li>
                <li className="nav-item	d-md-block d-lg-none">
                  <button
                    style={{ listStyle: "none" }}
                    onClick={logoutHandler}
                    type="button"
                    className="btn linkHover"
                  >
                    <Link className="text-decoration-none linkHover">
                      LOGOUT
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <button
                style={{ listStyle: "none" }}
                onClick={logoutHandler}
                type="button"
                className="btn linkHover d-none d-lg-block"
              >
                <li className="text-decoration-none linkHover">LOGOUT</li>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home;
