package com.fullstack.backend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstack.backend.Entity.Employee;

public interface EmployeeRepo extends JpaRepository<Employee,Long> {
    
}
