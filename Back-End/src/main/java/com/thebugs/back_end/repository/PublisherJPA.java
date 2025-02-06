package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.thebugs.back_end.entities.Publisher;

public interface PublisherJPA extends JpaRepository<Publisher, Integer> {
        @Query(value = "SELECT CASE WHEN EXISTS (" +
                        "SELECT 1 FROM Product WHERE publisher_id = :publisherId) " +
                        "THEN TRUE ELSE FALSE END", nativeQuery = true)
        boolean isPublisherInProduct(@Param("publisherId") Integer publisherId);
}
