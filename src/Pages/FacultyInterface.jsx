import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../Style/facultyStudentLogin.css";

import FacultyHomeHelper from "../Components/FacultyHomeHelper";

const FacultyInterface = () => {
  const history = useHistory();
  const store = useSelector((store) => store);
  return (
    <div className="offWhiteBackground">
      {store.faculty.isAuthenticated ? (
        <>
          <FacultyHomeHelper />
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <div className="row d-block d-md-flex justify-content-center">
                  <div className="col-12 col-lg-4 mb-5 mb-sm-5 mb-lg-0">
                    <div className=" card studentImage w-md-100">
                      <img
                        className="card-img-top"
                        src={store.faculty.faculty.faculty.avatar}
                        alt="Card image cap"
                        style={{
                          borderRadius: "5px 5px 0 0",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {store.faculty.faculty.faculty.name}
                        </h5>
                        <h5
                          className="card-title"
                          style={{ fontSize: "1.2rem" }}
                        >
                          {store.faculty.faculty.faculty.registrationNumber}
                        </h5>
                        <Link to="/faculty/updateProfile">UPDATE PROFILE</Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-lg-8  d-block d-md-flex justify-content-center bg-dark text-white p-4 m-0"
                    style={{ borderRadius: "5px", border: "none" }}
                  >
                    <table className="table">
                      <tbody className="text-white">
                        <tr>
                          <td>Name</td>
                          <td>{store.faculty.faculty.faculty.name}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{store.faculty.faculty.faculty.email}</td>
                        </tr>
                        <tr>
                          <td>Registration Number</td>
                          <td>
                            {store.faculty.faculty.faculty.registrationNumber}
                          </td>
                        </tr>
                        <tr>
                          <td>Date Of Birth</td>
                          <td>{store.faculty.faculty.faculty.dob}</td>
                        </tr>
                        <tr>
                          <td>Designation</td>
                          <td>{store.faculty.faculty.faculty.designation}</td>
                        </tr>
                        <tr>
                          <td>Joining Year</td>
                          <td>{store.faculty.faculty.faculty.joiningYear}</td>
                        </tr>
                        <tr>
                          <td>Department</td>
                          <td>{store.faculty.faculty.faculty.department}</td>
                        </tr>
                        <tr>
                          <td>Gender</td>
                          <td>
                            {store.faculty.faculty.faculty.gender
                              ? store.faculty.faculty.faculty.gender
                              : "NA"}
                          </td>
                        </tr>
                        <tr>
                          <td>Contact Number</td>
                          <td>
                            {store.faculty.faculty.faculty.facultyMobileNumber
                              ? store.faculty.faculty.faculty
                                  .facultyMobileNumber
                              : "NA"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </>
      ) : (
        history.push("/")
      )}
    </div>
  );
};

export default FacultyInterface;
