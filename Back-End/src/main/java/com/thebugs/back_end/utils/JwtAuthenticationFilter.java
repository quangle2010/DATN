package com.thebugs.back_end.utils;

import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.thebugs.back_end.resp.ResponseData;
import com.thebugs.back_end.services.CustomUserDetailsService;
import com.thebugs.back_end.services.UserService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

        private final JwtUtil jwtUtil;
        private final CustomUserDetailsService userDetailsService;
        private final ObjectMapper objectMapper;
        private final UserService userService;

        public JwtAuthenticationFilter(JwtUtil jwtUtil, CustomUserDetailsService userDetailsService,
                        ObjectMapper objectMapper, UserService userService) {
                this.jwtUtil = jwtUtil;
                this.userDetailsService = userDetailsService;
                this.objectMapper = objectMapper;
                this.userService = userService;
        }

        @Override
        protected void doFilterInternal(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response,
                        @NonNull FilterChain chain) throws ServletException, IOException {
                String token = request.getHeader("Authorization");
                if (token != null && token.startsWith("Bearer ")) {
                        token = token.substring(7);
                        try {
                                String userId = jwtUtil.extractUserId(token);
                                String email = userService.getUserById(Integer.parseInt(userId)).getEmail();
                                if (userId != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                                        UserDetails userDetails = userDetailsService.loadUserByUsername(email);
                                        if (jwtUtil.validateToken(token, Integer.parseInt(userId), "login")) {
                                                UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                                                                userDetails, null, userDetails.getAuthorities());

                                                authenticationToken.setDetails(new WebAuthenticationDetailsSource()
                                                                .buildDetails(request));
                                                SecurityContextHolder.getContext()
                                                                .setAuthentication(authenticationToken);
                                        }
                                }
                        } catch (Exception e) {
                                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                                response.setContentType("application/json;charset=UTF-8");
                                response.getWriter().write(objectMapper.writeValueAsString(
                                                new ResponseData(false, "Token không hợp lệ hoặc hết hạn", null)));
                                return;
                        }
                }
                chain.doFilter(request, response);
        }
}
