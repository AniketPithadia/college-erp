import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import HomeHelper from "../Components/HomeHelper";
import "../Style/facultyStudentLogin.css";
const Home = () => {
  const store = useSelector((store) => store);
  const history = useHistory();

  return (
    <div className="offWhiteBackground">
      {store.student.isAuthenticated ? (
        <div style={{ backgroundColor: "#f5f5f5", height: "100vh" }}>
          <HomeHelper />
          <div className="container">
            <div className="row ">
              <div className="col-md-2"></div>
              <div className="col-md-8 mt-5">
                <div className="row d-block d-md-flex justify-content-center  ">
                  <div className="col-12 col-lg-4 mb-5 mb-sm-5 mb-lg-0">
                    <div className="card studentImage w-md-100">
                      <img
                        className="card-img-top"
                        src={store.student.student.student.avatar}
                        alt="Card image cap"
                        style={{ borderRadius: "5px 5px 0 0" }}
                      />

                      <div className="card-body">
                        <h5 className="card-title">
                          {store.student.student.student.name}
                        </h5>
                        <p
                          className="card-title"
                          style={{ fontSize: "1.2rem" }}
                        >
                          {store.student.student.student.registrationNumber}
                        </p>
                        <Link to="/student/updateProfile">UPDATE PROFILE</Link>
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
                          <td>{store.student.student.student.name}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{store.student.student.student.email}</td>
                        </tr>
                        <tr>
                          <td>Registration Number</td>
                          <td>
                            {store.student.student.student.registrationNumber}
                          </td>
                        </tr>
                        <tr>
                          <td>Date Of Birth</td>
                          <td>{store.student.student.student.dob}</td>
                        </tr>
                        <tr>
                          <td>Year</td>
                          <td>{store.student.student.student.year}</td>
                        </tr>
                        <tr>
                          <td>Department</td>
                          <td>{store.student.student.student.department}</td>
                        </tr>
                        <tr>
                          <td>Section</td>
                          <td>{store.student.student.student.section}</td>
                        </tr>
                        <tr>
                          <td>Batch</td>
                          <td>{store.student.student.student.batch}</td>
                        </tr>
                        <tr>
                          <td>Gender</td>
                          <td>
                            {store.student.student.student.gender
                              ? store.student.student.student.gender
                              : "NA"}
                          </td>
                        </tr>
                        <tr>
                          <td>Contact Number</td>
                          <td>
                            {store.student.student.student.studentMobileNumber
                              ? store.student.student.student
                                  .studentMobileNumber
                              : "NA"}
                          </td>
                        </tr>
                        <tr>
                          <td>Aadhar Card</td>
                          <td>
                            {store.student.student.student.aadharCard
                              ? store.student.student.student.aadharCard
                              : "NA"}{" "}
                          </td>
                        </tr>
                        <tr>
                          <td>Father Name</td>
                          <td>
                            {store.student.student.student.fatherName
                              ? store.student.student.student.fatherName
                              : "NA"}
                          </td>
                        </tr>
                        <tr>
                          <td>Father Contact Number</td>
                          <td>
                            {store.student.student.student.fatherMobileNumber
                              ? store.student.student.student.fatherMobileNumber
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
        </div>
      ) : (
        history.push("/")
      )}
    </div>
  );
};

export default Home;
