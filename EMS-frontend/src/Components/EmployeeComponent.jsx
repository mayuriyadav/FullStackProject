/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { addEmployee, getEmployee, updateEmployee } from "../services/EmployeeService";
import { useNavigate,useParams } from "react-router-dom";


const EmployeeComponent = () => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [departmentName, setdepartmentName] = useState("");

  // const handleFirstName =(e)=>setFirstName(e.target.value)

  // const  handleLastName= (e)=>setLastName(e.target.value);

  // const handleEmail = (e) => setEmailId(e.target.value);

  //  const  handledepartmentName = (e) =>setdepartmentName(e.target.value);

// const {id} = useParams();

  const [errors, setError] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    departmentName: "",
  });

  const navigator = useNavigate();

  useEffect(() =>{
    if(id)
{
  getEmployee(id).then((response)=>{
    setFirstName(response.data.firstName);
    setLastName(response.data.lastName);
    setEmailId(response.data.emailId);
    setdepartmentName(response.data.departmentName);
  }).catch(error =>{
    console.error(error);
  })
}  
},[id])

  function saveOrupdateEmployee(e) {
    e.preventDefault();

    if (validatefunction()) {
      
      const employees = { firstName, lastName, emailId, departmentName };
      console.log(employees);
      if (id) {
        updateEmployee(id, employees)
          .then((response) => {
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        addEmployee(employees)
          .then((response) => {
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }
      

  function validatefunction() {
    let valid = true;
    const errorscopy = { ...errors };

    if (firstName.trim()) {
      errorscopy.firstName = "";
    } else {
      errorscopy.firstName = "First name is required";
      valid = false;
    }
    if (lastName.trim()) {
      errorscopy.lastName = "";
    } else {
      errorscopy.lastName = "last name is required";
      valid = false;
    }
    if (emailId.trim()) {
      errorscopy.emailId = "";
    } else {
      errorscopy.emailId = "Email Id is required";
      valid = false;
    }
    if (departmentName.trim()) {
      errorscopy.departmentName = "";
    } else {
      errorscopy.departmentName = "department is required";
      valid = false;
    }
    setError(errorscopy);
    return valid;
  }

function pageTitle(){
  if(id){
    return <h2 className="text-center">Update Employee</h2>;
  }else{
   return  <h2 className="text-center">Add Employee</h2>;
  }
}

  return (
    <div className="container">
      <br></br>
      <button
        className="btn btn-danger"
        onClick={() => navigator("/employees")}
      >
        Back
      </button>
      <br></br>
      <div className="row">
        <div className="card  col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}

          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="from-label">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  className={`form-control  ${
                    errors.firstName ? `is-invalid` : ""
                  }`}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="from-label">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="firstName"
                  value={lastName}
                  className={`form-control  ${
                    errors.lastName ? `is-invalid` : ""
                  }`}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="from-label">Email</label>
                <input
                  type="text"
                  placeholder="Email Id"
                  name="emailId"
                  value={emailId}
                  className={`form-control  ${
                    errors.emailId ? `is-invalid` : ""
                  }`}
                  onChange={(e) => setEmailId(e.target.value)}
                ></input>
                {errors.emailId && (
                  <div className="invalid-feedback">{errors.emailId}</div>
                )}
                <div className="form-group mb-2">
                  <label className="from-label">Department Name</label>
                  <input
                    type="text"
                    placeholder="Department Name"
                    name="departmentName"
                    value={departmentName}
                    className={`form-control  ${
                      errors.departmentName ? `is-invalid` : ""
                    }`}
                    onChange={(e) => setdepartmentName(e.target.value)}
                  ></input>
                  {errors.departmentName && (
                    <div className="invalid-feedback">
                      {errors.departmentName}
                    </div>
                  )}
                </div>
                <button
                  className="btn btn-success"
                  onClick={saveOrupdateEmployee}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeeComponent;
