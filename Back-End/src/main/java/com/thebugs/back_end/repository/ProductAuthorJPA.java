package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.ProductAuthor;

public interface ProductAuthorJPA extends JpaRepository<ProductAuthor, Integer> {

}
