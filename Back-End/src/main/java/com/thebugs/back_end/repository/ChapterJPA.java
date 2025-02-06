package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.Chapter;

public interface ChapterJPA extends JpaRepository<Chapter, Integer> {

}
