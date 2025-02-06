package com.thebugs.back_end.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.thebugs.back_end.dto.UserDTO;
import com.thebugs.back_end.resp.ResponseData;
import com.thebugs.back_end.services.UserService;

@RestController
public class ProfileController {

        private final UserService userService;

        public ProfileController(UserService userService) {
                this.userService = userService;
        }

        @GetMapping("/auth/profile")
        public ResponseEntity<ResponseData> getProfile(@RequestHeader("Authorization") String authorizationHeader) {
                ResponseData responseData = new ResponseData();
                try {
                        UserDTO userDTO = userService.getUserDTO(authorizationHeader);
                        responseData.setStatus(true);
                        responseData.setMessage("Lấy thông tin người dùng thành công");
                        responseData.setData(userDTO);
                        return ResponseEntity.ok(responseData);
                } catch (Exception e) {
                        responseData.setStatus(false);
                        responseData.setMessage("Lỗi " + e.getMessage());
                        responseData.setData(null);
                        return ResponseEntity.status(401).body(responseData);
                }
        }

}
