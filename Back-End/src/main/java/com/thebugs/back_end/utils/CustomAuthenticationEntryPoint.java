package com.thebugs.back_end.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.thebugs.back_end.resp.ResponseData;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import java.io.IOException;

public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {

        private final ObjectMapper objectMapper;

        public CustomAuthenticationEntryPoint() {
                this.objectMapper = new ObjectMapper();
        }

        @Override
        public void commence(HttpServletRequest request, HttpServletResponse response,
                        AuthenticationException authException) throws IOException, ServletException {
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.setContentType("application/json;charset=UTF-8");

                ResponseData responseData = new ResponseData(false, "Không có quyền truy cập", null);
                String jsonResponse = objectMapper.writeValueAsString(responseData);

                response.getWriter().write(jsonResponse);
        }
}