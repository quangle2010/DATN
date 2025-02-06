package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.OrderStatus;

public interface OrderStatusJPA extends JpaRepository<OrderStatus, Integer> {

}
