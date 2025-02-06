package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.CartItem;

public interface CartItemJPA extends JpaRepository<CartItem, Integer> {

}
