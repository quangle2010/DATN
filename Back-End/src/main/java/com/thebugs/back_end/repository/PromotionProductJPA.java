package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.PromotionProduct;

public interface PromotionProductJPA extends JpaRepository<PromotionProduct, Integer> {

}
