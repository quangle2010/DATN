package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.Role;

public interface RoleJPA extends JpaRepository<Role, Integer> {

}
