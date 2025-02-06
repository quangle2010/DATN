package com.thebugs.back_end.beans;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserBean {
        private String fullName;
        private String email;
        private String phone;
}
