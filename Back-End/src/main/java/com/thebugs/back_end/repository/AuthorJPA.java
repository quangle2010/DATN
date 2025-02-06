package com.thebugs.back_end.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.thebugs.back_end.entities.Author;

public interface AuthorJPA extends JpaRepository<Author, Integer> {
        @Query("SELECT a FROM  Author a WHERE : keyword IS NULL OR a.name LIKE %:keyword%")
        Page<Author> findByNameAuthor(@Param("keyword") String keyword, Pageable pageable);

        @Query("SELECT COUNT(g) FROM Author g WHERE :keyword IS NULL OR :keyword = '' OR g.name LIKE %:keyword%")
        int countfindByName(@Param("keyword") String keyword);
}
