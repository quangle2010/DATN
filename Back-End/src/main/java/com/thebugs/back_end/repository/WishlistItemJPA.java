package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.WishlistItem;

public interface WishlistItemJPA extends JpaRepository<WishlistItem, Integer> {

}
