import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import AdminHomeHelper from "../../Components/AdminHomeHelper";
import "../../Style/facultyStudentLogin.css";
const AdminHome = () => {
  const store = useSelector((store) => store);

  const history = useHistory();
  return (
    <div className="offWhiteBackground">
      {store.admin.isAuthenticated ? (
        <>
          <AdminHomeHelper />
          <div className="container">
            <div className="row mt-5">
              <div className="col-2"></div>
              <div className="col-8">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={store.admin.admin.avatar}
                        style={{ borderRadius: "5px 5px 0 0" }}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{store.admin.admin.name}</h5>
                        <h5 className="card-title">
                          {store.admin.admin.registrationNumber}
                        </h5>
                        {/* <Link to='/faculty/updateProfile'>UPDATE PROFILE</Link> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="col d-block d-md-flex justify-content-center bg-dark text-white p-4"
                    style={{ borderRadius: "5px", border: "none" }}
                  >
                    <table className="table align-middle">
                      <tbody className="text-white">
                        <tr>
                          <td>Name</td>
                          <td>{store.admin.admin.name}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{store.admin.admin.email}</td>
                        </tr>
                        <tr>
                          <td>Registration Number</td>
                          <td>{store.admin.admin.registrationNumber}</td>
                        </tr>
                        <tr>
                          <td>Joining Year</td>
                          <td>{store.admin.admin.joiningYear}</td>
                        </tr>
                        <tr>
                          <td>Department</td>
                          <td>{store.admin.admin.department}</td>
                        </tr>
                        <tr>
                          <td>Contact Number</td>
                          <td>
                            {store.admin.admin.contactNumber
                              ? store.admin.admin.contactNumber
                              : "NA"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </>
      ) : (
        history.push("/")
      )}
    </div>
  );
};

export default AdminHome;
