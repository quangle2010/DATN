package com.thebugs.back_end.mappers;

import org.springframework.stereotype.Component;

import com.thebugs.back_end.dto.UserDTO;
import com.thebugs.back_end.entities.Role;
import com.thebugs.back_end.entities.User;

@Component
public class UserMapper {
        public UserDTO toDTO(User user) {
                if (user == null) {
                        return null;
                }
                UserDTO userDTO = new UserDTO();
                Integer id = userRoleId(user);
                if (id != null) {
                        userDTO.setRole(id);
                }
                userDTO.setActive(user.isActive());
                userDTO.setEmail(user.getEmail());
                userDTO.setFullName(user.getFullName());
                userDTO.setId(user.getId());
                userDTO.setPhone(user.getPhone());
                return userDTO;
        }

        private Integer userRoleId(User user) {
                Role role = user.getRole();
                if (role == null) {
                        return null;
                }
                return role.getId();
        }
}
