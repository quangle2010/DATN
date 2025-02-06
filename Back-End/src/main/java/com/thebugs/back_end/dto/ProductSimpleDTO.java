package com.thebugs.back_end.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductSimpleDTO {
        private Integer id;
        private String productName;
        private VolumeSimpleDTO volumeSimpleDTO;
        private String image_name;
        private Double price;
        private int rate;
        private double promotion;
}
