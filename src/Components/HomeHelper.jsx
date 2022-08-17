import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  studentLogout,
  newerChats,
  previousChats,
} from "../redux/action/studentAction";
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
  useEffect(() => {
    dispatch(newerChats(store.student.student.student.name));
    dispatch(previousChats(store.student.student.student.name));
  }, [store.student.newerChats.length]);
  const logoutHandler = () => {
    dispatch(studentLogout());
    history.push("/");
  };
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg facultyNav ">
            <h4 className="navbar-brand logoNav" href="">
              LDRP
            </h4>

            <Link to="/home" className="text-decoration-none z100">
              <button type="button" className="btn z100 linkHover justifySelf">
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
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <button type="button" className="btn">
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
                  <button type="button" className="btn">
                    <Link
                      to="/student/updatePassword"
                      className="text-decoration-none linkHover"
                    >
                      <li>UPDATE PASSWORD</li>
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
                className="btn"
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
