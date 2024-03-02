/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { ListEmployees, deleteEmployee } from '../services/EmployeeService';
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

     const navigator = useNavigate();
     
  useEffect(() => {
    getAllEmployees()
  }, []);

  function getAllEmployees(){
    ListEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addEmployee() {
    navigator("/add-employee");
  }
 
  function updateEmployee1(id) {
    navigator(`edit-employee/${id}`);
    console.log(id);
  }

   function removeEmployee(id){
   
    console.log(id)
  deleteEmployee(id).then((response)=>
  {
    getAllEmployees()
  }).catch(error =>{
    console.log(error)
  })

   }
  return (
    <div>
      <br></br>
      <h2 className="text-center">Employees List</h2>
      <div>
        <button className="btn btn-primary" onClick={addEmployee}>
          Add Employee
        </button>
      </div>
      <br></br>
      <div className="">
        <table className="table table-striped table-bordered">
          <thead style={{ backgroundColor: "#f2f2f2" }}>
            <tr>
              {/* <th>Employee Id</th> */}
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Employee Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                {/* <td>{employee.id}</td> */}
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>{employee.departmentName}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => updateEmployee1(employee.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeEmployee(employee.id)} style={{marginLeft:"10px"}}
                  >
                   Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployeeComponent
// onClick={this.addEmployee}