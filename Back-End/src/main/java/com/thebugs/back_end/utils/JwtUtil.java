package com.thebugs.back_end.utils;

import java.security.Key;
import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

        private static final String SECRET_KEY = "IUhuQQpG1l3gA5aFf9SjfjRau2WiXYDIORDGWkggqNBIv4aGb5";
        private static final long EXPIRATION_TIME = 1000 * 60 * 60 * 24 * 7;

        private Key getSigningKey() {
                return Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
        }

        public String generateToken(int userId, int roleId, String typeJWT) {
                return Jwts.builder()
                                .setSubject(String.valueOf(userId))
                                .claim("roleId", roleId)
                                .claim("typeJWT", typeJWT)
                                .setIssuedAt(new Date())
                                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                                .compact();
        }

        public String extractUserId(String token) {
                try {
                        return Jwts.parserBuilder()
                                        .setSigningKey(getSigningKey())
                                        .build()
                                        .parseClaimsJws(token)
                                        .getBody()
                                        .getSubject();
                } catch (Exception e) {
                        return null;
                }
        }

        public int extractRoleId(String token) {
                try {
                        return Jwts.parserBuilder()
                                        .setSigningKey(getSigningKey())
                                        .build()
                                        .parseClaimsJws(token)
                                        .getBody()
                                        .get("roleId", Integer.class);
                } catch (Exception e) {
                        return -1;
                }
        }

        public String extractTypeJWT(String token) {
                try {
                        return Jwts.parserBuilder()
                                        .setSigningKey(getSigningKey())
                                        .build()
                                        .parseClaimsJws(token)
                                        .getBody()
                                        .get("typeJWT", String.class);
                } catch (Exception e) {
                        return null;
                }
        }

        public boolean validateToken(String token, int userId, String expectedTypeJWT) {
                String extractedUserId = extractUserId(token);
                String extractedTypeJWT = extractTypeJWT(token);

                return extractedUserId != null
                                && extractedUserId.equals(String.valueOf(userId))

                                && extractedTypeJWT != null
                                && extractedTypeJWT.equals(expectedTypeJWT)
                                && !isTokenExpired(token);
        }

        private boolean isTokenExpired(String token) {
                try {
                        Date expiration = Jwts.parserBuilder()
                                        .setSigningKey(getSigningKey())
                                        .build()
                                        .parseClaimsJws(token)
                                        .getBody()
                                        .getExpiration();
                        return expiration.before(new Date());
                } catch (Exception e) {
                        return true;
                }
        }
}
