package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.ProductGenre;

public interface ProductGenreJPA extends JpaRepository<ProductGenre, Integer> {

}
