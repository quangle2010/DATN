package com.thebugs.back_end.dto;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductShopDTO {

        private Integer productId;
        private String productName;
        private Integer cartItemQuantity;
        private Double productPrice;
        private String productImage;
        private Double rate;
        private Double promotionValue;

}
