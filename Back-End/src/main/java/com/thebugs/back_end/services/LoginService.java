package com.thebugs.back_end.services;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.thebugs.back_end.entities.User;
import com.thebugs.back_end.utils.JwtUtil;

@Service
public class LoginService {

        private final UserService userService;
        private final JwtUtil jwtUtil;
        private final BCryptPasswordEncoder passwordEncoder;

        public LoginService(UserService userService, JwtUtil jwtUtil, BCryptPasswordEncoder passwordEncoder) {
                this.userService = userService;
                this.jwtUtil = jwtUtil;
                this.passwordEncoder = new BCryptPasswordEncoder();
        }

        public String login(String email, String password) {
                User user = userService.getUserByEmail(email);
                if (!passwordEncoder.matches(password, user.getPassword())) {
                        throw new BadCredentialsException("Tài khoản hoặc mật khẩu không đúng");
                }
                return jwtUtil.generateToken(user.getId(), user.getRole().getId(), "login");
        }
}
