package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.Image;

public interface ImageJPA extends JpaRepository<Image, Integer> {

}
