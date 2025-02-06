package com.thebugs.back_end.services;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.thebugs.back_end.dto.UserDTO;
import com.thebugs.back_end.entities.User;
import com.thebugs.back_end.mappers.UserMapper;
import com.thebugs.back_end.repository.UserJPA;
import com.thebugs.back_end.utils.JwtUtil;

@Service
public class UserService {

        private final UserJPA userJPA;
        private final UserMapper userMapper;
        private final BCryptPasswordEncoder passwordEncoder;
        private final JwtUtil jwtUtil;

        public UserService(UserJPA userJPA, UserMapper userMapper, BCryptPasswordEncoder passwordEncoder,
                        JwtUtil jwtUtil) {
                this.userJPA = userJPA;
                this.userMapper = userMapper;
                this.passwordEncoder = new BCryptPasswordEncoder();
                this.jwtUtil = jwtUtil;
        }

        public User getUserToken(String authorizationHeader) {
                String token = authorizationHeader.startsWith("Bearer ")
                                ? authorizationHeader.substring(7)
                                : authorizationHeader;
                String userId = jwtUtil.extractUserId(token);
                return getUserById(Integer.parseInt(userId));
        }

        public UserDTO getUserDTO(String token) {
                return userMapper.toDTO(getUserToken(token));
        }

        public User getUserByEmail(String email) {
                return userJPA.findByEmail(email)
                                .orElseThrow(() -> new IllegalArgumentException(
                                                "Email hoặc mật khẩu không đúng"));

        }

        public User getUserById(Integer id) {
                return userJPA.findById(id)
                                .orElseThrow(() -> new IllegalArgumentException(
                                                "Không tìm thấy người dùng có id= " + id));

        }

        public UserDTO updateUser(User user) {
                userJPA.findByEmailExist(user.getId(), user.getEmail())
                                .ifPresent(u -> {
                                        throw new IllegalArgumentException("Email đã được sử dụng");
                                });
                userJPA.findByPhoneExist(user.getId(), user.getPhone())
                                .ifPresent(u -> {
                                        throw new IllegalArgumentException("Số điện thoại đã được sử dụng");
                                });
                User userUpdated = userJPA.save(user);
                return userMapper.toDTO(userUpdated);
        }

}
