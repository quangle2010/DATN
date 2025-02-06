package com.thebugs.back_end.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CartItemDTO {
        private Integer shopId;
        private String shopName;
        private List<ProductShopDTO> products;
}
