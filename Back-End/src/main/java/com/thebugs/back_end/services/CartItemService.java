package com.thebugs.back_end.services;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.thebugs.back_end.entities.User;
import com.thebugs.back_end.utils.ConvertObject;

import com.thebugs.back_end.dto.CartItemDTO;
import com.thebugs.back_end.dto.ProductShopDTO;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class CartItemService {

        private final JdbcTemplate jdbcTemplate;
        private final UserService userService;

        public CartItemService(JdbcTemplate jdbcTemplate, UserService userService) {
                this.jdbcTemplate = jdbcTemplate;
                this.userService = userService;
        }

        public List<CartItemDTO> getCartItemsByUser(String authorizationHeader) {
                User user = userService.getUserToken(authorizationHeader);
                if (user == null) {
                        throw new IllegalArgumentException("Không tìm thấy người dùng");
                }

                String sql = "CALL getCartItemsByUser(?)";
                List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql, user.getId());
                List<CartItemDTO> cartItems = new ArrayList<>();
                for (Map<String, Object> row : rows) {
                        CartItemDTO cartItem = new CartItemDTO();
                        cartItem.setShopId((Integer) row.get("shopId"));
                        cartItem.setShopName((String) row.get("shopName"));
                        List<ProductShopDTO> products = new ArrayList<>();
                        ProductShopDTO product = new ProductShopDTO();
                        product.setProductId((Integer) row.get("productId"));
                        product.setProductName((String) row.get("productName"));
                        product.setCartItemQuantity(ConvertObject.convertToInteger(row.get("cartItemQuantity")));
                        product.setProductImage((String) row.get("productImage"));
                        product.setProductPrice(ConvertObject.convertToDouble(row.get("productPrice")));
                        product.setRate(ConvertObject.convertToDouble(row.get("rate")));
                        product.setPromotionValue(ConvertObject.convertToDouble(row.get("promotionValue")));
                        products.add(product);
                        cartItem.setProducts(products);
                        cartItems.add(cartItem);
                }

                return cartItems;
        }
}
