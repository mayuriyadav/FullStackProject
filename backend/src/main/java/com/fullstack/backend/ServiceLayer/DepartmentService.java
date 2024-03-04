package com.fullstack.backend.ServiceLayer;

import java.util.List;

import com.fullstack.backend.Entity.Department;

public interface DepartmentService {

    Department createDepartment(Department department);

    Department getDepartmentById(Long id);

    List<Department> getAllDepartments();

    Department updateDepartment(Long id, Department updatedDepartment);

    void deleteDepartment(Long id);
    
}
