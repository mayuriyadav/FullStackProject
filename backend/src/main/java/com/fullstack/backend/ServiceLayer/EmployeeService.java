package com.fullstack.backend.ServiceLayer;

import java.util.List;

import com.fullstack.backend.Entity.Employee;

public interface EmployeeService {

    Object employeeService = null;

    public Employee addEmployee(Employee employee);
    public Employee updatEmployee(Long id, Employee employee);
    public List<Employee> getAllEmployees();
    public void deleteEmployee(Long id);
    
    public Employee GetEmployee(Long id);
    
    
}
