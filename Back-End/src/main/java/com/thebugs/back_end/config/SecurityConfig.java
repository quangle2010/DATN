package com.thebugs.back_end.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import com.thebugs.back_end.services.CustomUserDetailsService;

import com.thebugs.back_end.utils.CustomAuthenticationEntryPoint;
import com.thebugs.back_end.utils.JwtAuthenticationFilter;

@Configuration
public class SecurityConfig {
        private final JwtAuthenticationFilter jwtAuthenticationFilter;

        public SecurityConfig(@Lazy JwtAuthenticationFilter jwtAuthenticationFilter) {
                this.jwtAuthenticationFilter = jwtAuthenticationFilter;
        }

        @Bean
        public BCryptPasswordEncoder passwordEncoder() {
                return new BCryptPasswordEncoder();
        }

        @Bean
        public CustomAuthenticationEntryPoint customAuthenticationEntryPoint() {
                return new CustomAuthenticationEntryPoint();
        }

        @Bean
        public CustomUserDetailsService customUserDetailsService() {
                return new CustomUserDetailsService();
        }

        @Bean
        public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
                AuthenticationManagerBuilder authenticationManagerBuilder = http
                                .getSharedObject(AuthenticationManagerBuilder.class);

                authenticationManagerBuilder
                                .userDetailsService(customUserDetailsService())
                                .passwordEncoder(passwordEncoder());

                return authenticationManagerBuilder.build();
        }

        @Bean
        public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
                http.csrf(csrf -> csrf.disable())
                                .cors(cors -> cors.configurationSource(request -> {
                                        CorsConfiguration configuration = new CorsConfiguration();
                                        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
                                        configuration.setAllowedMethods(
                                                        Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
                                        configuration.setAllowedHeaders(Arrays.asList("*"));
                                        configuration.setAllowCredentials(true);
                                        return configuration;
                                }))
                                .authorizeHttpRequests(requests -> requests
                                                .requestMatchers("/login", "/comment/**", "/logout", "/register",
                                                                "/home", "/",
                                                                "/products",
                                                                "/product-detail", "/images/**", "/forgotpassword",
                                                                "/updatepassword/**",
                                                                "/payment-online/**")
                                                .permitAll()
                                                .requestMatchers("/admin/**").hasAuthority("admin")
                                                .requestMatchers("/user/**").hasAnyAuthority("user", "seller")
                                                .requestMatchers("/seller/**").hasAuthority("seller")
                                                .anyRequest().authenticated())
                                .exceptionHandling(exceptionHandling -> exceptionHandling
                                                .authenticationEntryPoint(customAuthenticationEntryPoint()))
                                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

                return http.build();
        }
}
