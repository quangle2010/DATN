package com.thebugs.back_end.beans;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AuthorBean {
        private Integer id;
        @NotBlank(message = "Tên tác giả không được bỏ trống")
        @Pattern(regexp = "^[a-zA-Z\\s]+$", message = "Tên tác giả không được nhập số và ký tự đặc biệt")
        @Size(min = 3, max = 100, message = "Tên tác giả phải có ít nhất 3 ký tự và không quá 100 ký tự")
        private String name;
}