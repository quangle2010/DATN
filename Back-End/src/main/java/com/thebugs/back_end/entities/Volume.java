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
@Table(name = "volumes")
public class Volume {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private int volumeNumber;

    @Column(nullable = false, length = 60)
    private String title;

    @Column(nullable = false)
    private int pageCount;

    @Column(nullable = false)
    private Date publicationDate;

    @Column(nullable = false)
    private Date createAt;

    @Column
    private Date updateAt;

    @OneToMany(mappedBy = "volume")
    private List<Chapter> chapters;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;
}
