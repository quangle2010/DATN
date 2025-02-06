package com.thebugs.back_end.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.thebugs.back_end.entities.User;

@Service
public class CustomUserDetailsService implements UserDetailsService {
        @Autowired
        private UserService userService;

        @Override
        public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
                User user = userService.getUserByEmail(email);
                if (user == null) {
                        throw new UsernameNotFoundException("User not found");
                }
                GrantedAuthority authority = new SimpleGrantedAuthority(user.getRole().getName());

                return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
                                List.of(authority));
        }
}
