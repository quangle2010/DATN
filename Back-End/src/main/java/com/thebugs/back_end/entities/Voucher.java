package com.thebugs.back_end.entities;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "vouchers")
public class Voucher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "shop_id", nullable = false)
    private Shop shop;

    @Column(nullable = false, length = 60)
    private String codeVoucher;

    @Column(nullable = false)
    private int minTotalOrder;

    @Column(nullable = false)
    private int maxDiscount;

    @Column(nullable = false)
    private int quantity;

    @Column
    private String description;

    @Column(nullable = false)
    private Date expireDate;

    @Column(nullable = false)
    private Boolean active;

    @OneToMany(mappedBy = "voucher")
    private List<UserVoucher> userVouchers;

    @OneToMany(mappedBy = "voucher")
    private List<Order> orders;
}
