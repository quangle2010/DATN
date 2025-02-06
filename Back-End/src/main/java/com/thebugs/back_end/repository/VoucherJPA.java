package com.thebugs.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thebugs.back_end.entities.Voucher;

public interface VoucherJPA extends JpaRepository<Voucher, Integer> {

}
