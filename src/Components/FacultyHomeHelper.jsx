import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { facultyLogout } from "../redux/action/facultyAction";
import hamburgerIcon from "../Style/Images/icons8-menu-50.svg";
import "../Style/facultyStudentLogin.css";
const Home = () => {
  const store = useSelector((store) => store);
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  useEffect(() => {
    if (store.faculty.faculty.faculty.name) {
      setName(store.faculty.faculty.faculty.name);
    }
  }, [store.faculty.faculty.faculty.name]);
  const logoutHandler = () => {
    dispatch(facultyLogout());
    history.push("/");
  };
  return (
    <div className="container-fluid m-0 p-0">
      {/* <Header /> */}
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg facultyNav d-flex align-items-center justify-content-between  ">
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
                      className="btn linkHover z100 linkHover justifySelf"
                    >
                      {name.toUpperCase()}
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn linkHover">
                    <Link
                      to="/faculty/updateProfile"
                      className="text-decoration-none linkHover"
                    >
                      <li>UPDATE PROFILE</li>
                    </Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn linkHover">
                    <Link
                      to="/attendenceFaculty"
                      className="text-decoration-none linkHover"
                    >
                      <li>MARK ATTENDANCE</li>
                    </Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn linkHover">
                    <Link
                      to="/faculty/uploadMarks"
                      className="text-decoration-none linkHover"
                    >
                      <li>UPLOAD MARKS</li>
                    </Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn linkHover">
                    <Link
                      to="/faculty/updatePassword"
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
