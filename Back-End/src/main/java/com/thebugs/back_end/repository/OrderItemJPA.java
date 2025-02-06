package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.OrderItem;

public interface OrderItemJPA extends JpaRepository<OrderItem, Integer> {

}
