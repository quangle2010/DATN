package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.Review;

public interface ReviewJPA extends JpaRepository<Review, Integer> {

}
