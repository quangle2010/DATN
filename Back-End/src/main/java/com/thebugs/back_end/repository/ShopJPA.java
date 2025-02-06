package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.Shop;

public interface ShopJPA extends JpaRepository<Shop, Integer> {

}
