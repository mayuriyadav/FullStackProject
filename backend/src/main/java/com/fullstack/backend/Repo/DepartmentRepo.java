package com.fullstack.backend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstack.backend.Entity.Department;

public interface DepartmentRepo extends JpaRepository<Department,Long>{
    
}
