package com.fullstack.backend.ServiceLayer;

import java.util.List;
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
    public Department getDepartmentById(Long id) {
        Department existingDepartment = departmentRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

        return existingDepartment;
    }

    @Override
    public List<Department> getAllDepartments() {
        return departmentRepo.findAll();
    }

    @Override
    public Department updateDepartment(Long id, Department updatedDepartment) {
        Department existingDepartment = departmentRepo.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Employee not exist with id :" + id));
               
            existingDepartment.setDepartmentName(updatedDepartment.getDepartmentName());
            existingDepartment.setDepartmentDescription(updatedDepartment.getDepartmentDescription());
             Department d = departmentRepo.save(existingDepartment);
             return d ;
        } 
    

    @Override
    public void deleteDepartment(Long departmentId) {
        departmentRepo.deleteById(departmentId);
    }
    
}
