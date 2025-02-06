package com.thebugs.back_end.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductDTO {
        private Integer id;
        private String name;
        private int quantity;
        private double price;
        private String packageName;
        private PublisherDTO publisherDTO;
        private List<ProductAuthorDTO> productAuthorDTOs;
        private List<ProductGenreDTO> productGenreDTOs;
        private double weight;
        private Boolean active;
}
