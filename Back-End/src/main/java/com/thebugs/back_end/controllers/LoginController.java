package com.thebugs.back_end.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.thebugs.back_end.beans.LoginBean;
import com.thebugs.back_end.resp.ResponseData;
import com.thebugs.back_end.services.LoginService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class LoginController {

        private final LoginService loginService;

        public LoginController(LoginService loginService) {
                this.loginService = loginService;
        }

        @PostMapping("/login")
        public ResponseEntity<ResponseData> postLogin(@RequestBody LoginBean loginBean) {
                ResponseData responseData = new ResponseData();
                try {
                        String jwt = loginService.login(loginBean.getEmail(), loginBean.getPassword());
                        responseData.setStatus(true);
                        responseData.setMessage("Đăng nhập thành công");
                        responseData.setData(jwt);
                        return ResponseEntity.ok(responseData);
                } catch (Exception e) {
                        responseData.setStatus(false);
                        responseData.setMessage(e.getMessage());
                        responseData.setData(null);
                        return ResponseEntity.status(401).body(responseData);
                }
        }

}
