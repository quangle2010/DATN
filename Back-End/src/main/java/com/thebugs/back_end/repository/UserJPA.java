package com.thebugs.back_end.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.thebugs.back_end.entities.User;

public interface UserJPA extends JpaRepository<User, Integer> {
        @Query("SELECT u FROM User u WHERE u.email = ?1 AND u.active = true")
        Optional<User> findByEmail(String email);

        @Query("SELECT u FROM User u  WHERE u.email = ?2 AND (u.id <> ?1 OR ?1 IS NULL)")
        Optional<User> findByEmailExist(Integer id, String email);

        @Query("SELECT u FROM User u  WHERE u.phone = ?2 AND (u.id <> ?1 OR ?1 IS NULL)")
        Optional<User> findByPhoneExist(Integer id, String phone);
}
