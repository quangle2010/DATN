package com.thebugs.back_end.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.thebugs.back_end.entities.Genre;

public interface GenreJPA extends JpaRepository<Genre, Integer> {
        @Query("SELECT g FROM Genre g WHERE :keyword IS NULL OR g.name LIKE %:keyword% ")
        Page<Genre> findByName(@Param("keyword") String keyword, Pageable pageable);

        @Query("SELECT COUNT(g) FROM Genre g WHERE :keyword IS NULL OR :keyword = '' OR g.name LIKE %:keyword%")
        int countfindByName(@Param("keyword") String keyword);

        @Query("SELECT g FROM Genre g WHERE g.name = ?2 AND (g.id <> ?1 OR ?1 IS NULL)")
        Optional<Genre> findByNameExist(Integer id, String name);

}
