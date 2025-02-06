package com.thebugs.back_end.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.thebugs.back_end.entities.Product;

public interface ProductJPA extends JpaRepository<Product, Integer> {
        @Query("SELECT g FROM Product g WHERE :keyword IS NULL OR g.name LIKE %:keyword% ")
        Page<Product> findByName(@Param("keyword") String keyword, Pageable pageable);

        @Query("SELECT COUNT(g) FROM Product g WHERE :keyword IS NULL OR :keyword = '' OR g.name LIKE %:keyword%")
        int countfindByName(@Param("keyword") String keyword);

        @Query("SELECT g FROM Product g WHERE g.active = ?1")
        Page<Product> PageProductAllByActive(boolean active, Pageable pageable);

}
