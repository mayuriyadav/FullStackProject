package com.fullstack.backend.ServiceLayer;

import java.util.List;

import com.fullstack.backend.Entity.Department;

public interface DepartmentService {

    Department createDepartment(Department department);

    Department getDepartmentById(Long departmentId);

    List<Department> getAllDepartments();

    Department updateDepartment(Long departmentId, Department updatedDepartment);

    void deleteDepartment(Long departmentId);
    
}
