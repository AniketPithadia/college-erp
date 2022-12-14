import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { facultyLogin } from "../redux/action/facultyAction";
import { studentLogin } from "../redux/action/studentAction";
import classnames from "classnames";
import { IoMdPerson } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";

import "../Style/facultyStudentLogin.css";

const FacultyStudentLoginPags = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [facultyRegNum, setFacultyRegNum] = useState("");
  const [facultyPassword, setFacultyPassword] = useState("");
  const [studentRegNum, setStudentRegNum] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorsHelper, setErrorsHelper] = useState({});
  const [isFacultyLoading, setIsFacultyLoading] = useState(false);
  const [isStudentLoading, setIsStudentLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (store.faculty.isAuthenticated) {
      history.push("/faculty");
    }
  }, [store.faculty.isAuthenticated]);

  useEffect(() => {
    if (store.error) {
      setErrors(store.error);
    }
  }, [store.error]);
  useEffect(() => {
    if (store.student.isAuthenticated) {
      history.push("/home");
    }
  }, [store.student.isAuthenticated]);

  useEffect(() => {
    if (store.errorHelper) {
      setErrorsHelper(store.errorHelper);
    }
  }, [store.errorHelper]);

  const facultyFormHandler = (e) => {
    e.preventDefault();
    let registrationNumber;
    let password;
    setIsFacultyLoading(true);
    dispatch(
      facultyLogin({
        registrationNumber: facultyRegNum,
        password: facultyPassword,
      })
    );
  };

  useEffect(() => {
    if (store.error || store.faculty.isAuthenticated) {
      setIsFacultyLoading(false);
    } else {
      setIsFacultyLoading(true);
    }
  }, [store.error, store.faculty.isAuthenticated]);

  const studentFormHandler = (e) => {
    e.preventDefault();
    let registrationNumber;
    let password;
    setIsStudentLoading(true);
    dispatch(
      studentLogin({
        registrationNumber: studentRegNum,
        password: studentPassword,
      })
    );
  };

  useEffect(() => {
    if (store.errorHelper || store.student.isAuthenticated) {
      setIsStudentLoading(false);
    } else {
      setIsStudentLoading(false);
    }
  }, [store.errorHelper, store.student.isAuthenticated]);

  return (
    <div className="container-fluid">
      <div className="row" id="trail">
        <div className="row justify-content-center align-items-center m-0 p-0">
          <h1
            className="text-white text-center mt-5"
            style={{ fontSize: "3.3rem" }}
          >
            Login to access dashboard
          </h1>
        </div>
        <div className="row justify-content-center align-items-center m-0 p-0 marginNegativeTop ">
          <div className="col-10 col-lg-6 m-5 m-lg-0">
            <div
              className="col-md-8 m-auto border"
              style={{
                backgroundColor: "#f5f5f5",
                borderRadius: "1.2rem",
                padding: "1rem 1rem 0rem 1rem",
              }}
            >
              <div className="p-2">
                <h3 className="text-center mb-5">FACULTY</h3>
                <form noValidate onSubmit={facultyFormHandler}>
                  <div className="form-group my-4">
                    <label
                      htmlFor="facRegId"
                      className="d-flex align-items-center justify-items-center mb-3"
                    >
                      <IoMdPerson size={30} />
                      <h5 className="mb-0 ml-1">Registration Number</h5>
                    </label>
                    <input
                      onChange={(e) => setFacultyRegNum(e.target.value)}
                      type="text"
                      value={facultyRegNum}
                      className={classnames("form-control", {
                        "is-invalid": errors.registrationNumber,
                      })}
                      id="facRegId"
                    />
                    {errors.registrationNumber && (
                      <div className="invalid-feedback">
                        {errors.registrationNumber}
                      </div>
                    )}
                  </div>
                  <div className="form-group my-4">
                    <label
                      htmlFor="passwordFacId"
                      className="d-flex align-items-center justify-items-center mb-3"
                    >
                      <RiLockPasswordLine size={30} />
                      <h5 className="mb-0">Password</h5>
                    </label>
                    <input
                      onChange={(e) => setFacultyPassword(e.target.value)}
                      value={facultyPassword}
                      className={classnames("form-control", {
                        "is-invalid": errors.password,
                      })}
                      type="password"
                      id="passwordFacId"
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-md-1">
                      {isFacultyLoading && (
                        <div class="spinner-border text-info" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {!isFacultyLoading && (
                    <button
                      type="submit"
                      className="btn btn-info btn-block w-100 mb-4"
                    >
                      <span className="fs-5">Login</span>
                    </button>
                  )}
                </form>
                <p className="text-center mt-2 ">
                  <Link className="text-center" to="/forgotPassword/faculty">
                    Forgot Password
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-10 col-lg-6 m-5 m-lg-0">
            <div
              className="col-md-8 m-auto border"
              style={{
                backgroundColor: "#f5f5f5",
                borderRadius: "1.2rem",
                padding: "1rem 1rem 0rem 1rem",
              }}
            >
              <div className="p-2 ">
                <h3 className="text-center mb-5">STUDENT</h3>
                <form noValidate onSubmit={studentFormHandler}>
                  <div className="form-group my-4">
                    <label
                      htmlFor="studentId"
                      className="d-flex align-items-center justify-items-center mb-3"
                    >
                      <IoMdPerson size={30} />
                      <h5 className="mb-0">Registration Number</h5>
                    </label>
                    <input
                      onChange={(e) => setStudentRegNum(e.target.value)}
                      type="text"
                      value={studentRegNum}
                      className={classnames("form-control", {
                        "is-invalid": errorsHelper.registrationNumber,
                      })}
                      id="studentId"
                    />
                    {errorsHelper.registrationNumber && (
                      <div className="invalid-feedback">
                        {errorsHelper.registrationNumber}
                      </div>
                    )}
                  </div>
                  <div className="form-group my-4">
                    <label
                      htmlFor="passwordId"
                      className="d-flex align-items-center justify-items-center mb-3"
                    >
                      <RiLockPasswordLine size={30} />
                      <h5 className="mb-0 ml-1">Password</h5>
                    </label>
                    <input
                      onChange={(e) => setStudentPassword(e.target.value)}
                      value={studentPassword}
                      className={classnames("form-control", {
                        "is-invalid": errorsHelper.password,
                      })}
                      type="password"
                      id="passwordId"
                    />
                    {errorsHelper.password && (
                      <div className="invalid-feedback">
                        {errorsHelper.password}
                      </div>
                    )}
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-md-1">
                      {isStudentLoading && (
                        <div class="spinner-border text-info" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {!isStudentLoading && (
                    <button
                      type="submit"
                      className="btn btn-info btn-block w-100 mb-4 "
                    >
                      <span className="fs-5">Login</span>
                    </button>
                  )}
                </form>
                <p className="text-center mt-2">
                  <Link className="text-center" to="/forgotPassword/student">
                    Forgot Password
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyStudentLoginPags;
