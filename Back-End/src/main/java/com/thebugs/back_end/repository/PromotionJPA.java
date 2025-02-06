package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.Promotion;

public interface PromotionJPA extends JpaRepository<Promotion, Integer> {

}
