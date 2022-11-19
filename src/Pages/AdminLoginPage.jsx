import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { adminLogin } from "../redux/action/adminAction";
import { IoMdPerson } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import "../Style/facultyStudentLogin.css";

import classnames from "classnames";

const LoginPage = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (store.admin.isAuthenticated) {
      history.push("/admin");
    }
  }, [store.admin.isAuthenticated]);
  useEffect(() => {
    if (store.error) {
      setError(store.error);
    }
  }, [store.error]);

  const fromHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(adminLogin({ registrationNumber, password }));
  };

  useEffect(() => {
    if (store.error || store.admin.isAuthenticated) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [store.error, store.admin.isAuthenticated]);

  return (
    <div className="container-fluid" id="trail">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="d-flex justify-content-md-center align-items-center vh-100 ">
            <div>
              <h1 className="display-4 text-center text-white">ADMIN</h1>
              <form
                noValidate
                onSubmit={fromHandler}
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: "1.2rem",
                  width: "30rem",
                  height: "24rem",
                  padding: "2rem",
                }}
              >
                <div className="form-group my-4">
                  <label
                    htmlFor="emailId"
                    className="d-flex align-items-center justify-items-center mb-3"
                  >
                    <IoMdPerson size={30} />
                    <h5 className="mb-0 ml-1">Registration Number</h5>
                  </label>
                  <input
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    type="text"
                    value={registrationNumber}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": error.registrationNumber,
                    })}
                    id="emailId"
                  />
                  {error.registrationNumber && (
                    <div className="invalid-feedback">
                      {error.registrationNumber}
                    </div>
                  )}
                </div>
                <div className="form-group my-4">
                  <label
                    htmlFor="passwordId"
                    className="d-flex align-items-center justify-items-center mb-3"
                  >
                    <RiLockPasswordLine size={30} />
                    <h5 className="mb-0">Password</h5>
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": error.password,
                    })}
                    value={password}
                    type="password"
                    id="passwordId"
                  />
                  {error.password && (
                    <div className="invalid-feedback">{error.password}</div>
                  )}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-1">
                    {isLoading && (
                      <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    )}
                  </div>
                </div>
                {!isLoading && (
                  <button
                    type="submit"
                    className="btn btn-info btn-block fs-5 w-100"
                  >
                    Login
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
