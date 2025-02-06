package com.thebugs.back_end.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ProductHomeService {

        @Autowired
        private JdbcTemplate jdbcTemplate;

        public List<Object> getAllProduct() {
                String sql = "CALL getAllProduct()";
                return jdbcTemplate.query(sql, (rs, rowNum) -> {
                        Map<String, Object> productData = new HashMap<>();
                        productData.put("productId", rs.getInt("id"));
                        productData.put("productName", rs.getString("name"));
                        productData.put("imageName", rs.getString("image_name"));
                        productData.put("price", rs.getDouble("price"));
                        productData.put("promotionValue", rs.getDouble("promotion_value"));
                        productData.put("rate", rs.getDouble("rate"));
                        return productData;
                });
        }
}
