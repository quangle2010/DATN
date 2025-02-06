package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.UserVoucher;

public interface UserVoucherJPA extends JpaRepository<UserVoucher, Integer> {

}
