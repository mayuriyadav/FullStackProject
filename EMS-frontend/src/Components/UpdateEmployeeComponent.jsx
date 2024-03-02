// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import { getEmployee, updateEmployee } from "../services/EmployeeService";
// import { useParams, useNavigate } from "react-router-dom";

// const UpdateEmployeeComponent = () => {
//   const { id } = useParams();
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [emailId, setEmailId] = useState("");
//   const [departmentName, setDepartmentName] = useState("");

//   useEffect(() => {
//     getEmployee(id)
//       .then((response) => {
//         const { firstName, lastName, emailId, departmentName } = response.data;
//         setFirstName(firstName);
//         setLastName(lastName);
//         setEmailId(emailId);
//         setDepartmentName(departmentName);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [id]);

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedEmployee = { firstName, lastName, emailId, departmentName };
//     updateEmployee(id, updatedEmployee)
//       .then((response) => {
//         console.log(response.data);
//         navigate("/employees");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className="container">
//       <h2 className="text-center">Update Employee</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>First Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Last Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             className="form-control"
//             value={emailId}
//             onChange={(e) => setEmailId(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Department Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             value={departmentName}
//             onChange={(e) => setDepartmentName(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Update
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateEmployeeComponent;
