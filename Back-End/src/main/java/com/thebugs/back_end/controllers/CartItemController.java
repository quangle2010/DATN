package com.thebugs.back_end.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.thebugs.back_end.resp.ResponseData;
import com.thebugs.back_end.services.CartItemService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@RestController
public class CartItemController {

        private final CartItemService cartItemService;

        public CartItemController(CartItemService cartItemService) {
                this.cartItemService = cartItemService;
        }

        @GetMapping("/user/cart")
        public ResponseEntity<ResponseData> getPageHome(@RequestHeader("Authorization") String authorizationHeader) {
                ResponseData responseData = new ResponseData();
                try {
                        responseData.setStatus(true);
                        responseData.setMessage("Load thành công");
                        responseData.setData(cartItemService.getCartItemsByUser(authorizationHeader));
                        return ResponseEntity.ok(responseData);
                } catch (Exception e) {
                        responseData.setStatus(false);
                        responseData.setMessage("Lỗi " + e.getMessage());
                        responseData.setData(null);
                        return ResponseEntity.status(401).body(responseData);
                }

        }

}
