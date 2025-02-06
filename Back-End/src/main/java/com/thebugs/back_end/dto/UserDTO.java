package com.thebugs.back_end.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDTO {
        private Integer id;
        private String fullName;
        private String email;
        private String phone;
        private int role;
        private boolean active;
}
