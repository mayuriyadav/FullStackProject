package com.fullstack.backend.ServiceLayer;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fullstack.backend.Entity.Department;
import com.fullstack.backend.Exception.ResourceNotFoundException;
import com.fullstack.backend.Repo.DepartmentRepo;

@Service
public class DepartmentServiceImp implements DepartmentService {

@Autowired
private DepartmentRepo departmentRepo ;

    @Override
    public Department createDepartment(Department department) {
        return departmentRepo.save(department);
    }

    @Override
    public Department getDepartmentById(Long departmentId) {
        Department existingDepartment = departmentRepo.findById(departmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + departmentId));

        return existingDepartment;
    }

    @Override
    public List<Department> getAllDepartments() {
        return departmentRepo.findAll();
    }

    @Override
    public Department updateDepartment(Long departmentId, Department updatedDepartment) {
        Department existingDepartment = departmentRepo.findById(departmentId).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + departmentId));
        
            
            existingDepartment.setDepartmentName(updatedDepartment.getDepartmentName());
            existingDepartment.setDepartmentDescription(updatedDepartment.getDepartmentDescription());
            return departmentRepo.save(existingDepartment);
        } 
    

    @Override
    public void deleteDepartment(Long departmentId) {
        departmentRepo.deleteById(departmentId);
    }
    
}
