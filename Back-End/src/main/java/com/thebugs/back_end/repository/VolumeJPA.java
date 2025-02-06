package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.Volume;

public interface VolumeJPA extends JpaRepository<Volume, Integer> {

}
