package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.Order;

public interface OrderJPA extends JpaRepository<Order, Integer> {

}
