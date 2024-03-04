/* eslint-disable no-unused-vars */
import axios from "axios";

const REST_API_BASE_URL = "http://localhost:9091/api/v1/employees";

export const ListEmployees = () => axios.get(REST_API_BASE_URL);

export const addEmployee = (employees) => axios.post(REST_API_BASE_URL,employees);

export const getEmployee = (employeesId )=> axios.get(REST_API_BASE_URL + '/' +employeesId);

//export const updateEmployee = (employees, employeesId) =>axios.put(REST_API_BASE_URL + '/' + employeesId, employees);

    


const BASE_URL = "http://localhost:9091/api/v1/employees"; // Base URL for your API

export const updateEmployee = (employeeId, employees) => {
  const url = `${BASE_URL}/${employeeId}`;
  return axios.put(url, employees);
};


  export const deleteEmployee = (employeesId) => axios.delete(REST_API_BASE_URL + '/' + employeesId);
    