import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adminLogout } from "../redux/action/adminAction";
import "../Style/facultyStudentLogin.css";
import hamburgerIcon from "../Style/Images/icons8-menu-50.svg";

const Home = () => {
  const store = useSelector((store) => store);
  const [name, setName] = useState("");
  useEffect(() => {
    if (store.admin.admin.name) {
      setName(store.admin.admin.name);
    }
  }, [store.admin.admin.name]);
  const history = useHistory();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(adminLogout());
    history.push("/");
  };
  return (
    <div className="container-fluid m-0 p-0">
      <nav className="navbar navbar-expand-lg facultyNav d-flex align-items-center justify-content-between">
        <h4 className="navbar-brand logoNav" href="">
          LDRP
        </h4>
        <Link
          to="/admin"
          className="text-decoration-none z100 d-none d-lg-block"
        >
          <button type="button" className="btn  linkHover z100 justifySelf">
            {name.toUpperCase()}
          </button>
        </Link>
        <button
          className="navbar-toggler"
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
                  className="btn linkHover z100 justifySelf"
                >
                  {name.toUpperCase()}
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <button type="button" className="btn linkHover">
                <Link
                  to="/admin/addFaculty"
                  className="text-decoration-none linkHover"
                >
                  <li>ADD FACULTY</li>
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn linkHover">
                <Link
                  to="/admin/addStudent"
                  className="text-decoration-none linkHover"
                >
                  <li>ADD STUDENT</li>
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn linkHover">
                <Link
                  to="/admin/addSubject"
                  className="text-decoration-none linkHover"
                >
                  <li>ADD SUBJECT</li>
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn linkHover">
                <Link
                  to="/admin/addAdmin"
                  className="text-decoration-none linkHover"
                >
                  <li>ADD ADMIN</li>
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn linkHover">
                <Link
                  to="/admin/allFaculties"
                  className="text-decoration-none linkHover"
                >
                  <li>OUR FACULTIES</li>
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn linkHover">
                <Link
                  to="/admin/allStudents"
                  className="text-decoration-none linkHover"
                >
                  <li>OUR STUDENTS</li>
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn linkHover">
                <Link
                  to="/admin/allSubject"
                  className="text-decoration-none linkHover"
                >
                  <li>SUBJECTS</li>
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
                <Link className="text-decoration-none linkHover">LOGOUT</Link>
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
  );
};

export default Home;
