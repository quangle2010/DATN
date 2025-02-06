package com.thebugs.back_end.controllers;

import org.springframework.web.bind.annotation.RestController;
import com.thebugs.back_end.resp.ResponseData;
import com.thebugs.back_end.services.ProductHomeService;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class HomeController {

        private final ProductHomeService productHomeService;

        public HomeController(ProductHomeService productHomeService) {
                this.productHomeService = productHomeService;
        }

        @GetMapping("/home")
        public ResponseEntity<ResponseData> getPageHome(@RequestParam(defaultValue = "1") int page) {
                ResponseData responseData = new ResponseData();
                try {
                        List<Object> listProductHome = productHomeService.getAllProduct();
                        responseData.setStatus(true);
                        responseData.setMessage("Load thành công");
                        responseData.setData(listProductHome);
                        return ResponseEntity.ok(responseData);
                } catch (Exception e) {
                        responseData.setStatus(false);
                        responseData.setMessage("Lỗi " + e.getMessage());
                        responseData.setData(null);
                        return ResponseEntity.status(401).body(responseData);
                }

        }

}
