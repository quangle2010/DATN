package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.Address;

public interface AddressJPA extends JpaRepository<Address, Integer> {

}