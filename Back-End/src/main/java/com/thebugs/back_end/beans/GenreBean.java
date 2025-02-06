package com.thebugs.back_end.beans;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class GenreBean {
        private Integer id;
        @NotBlank(message = "Tên thể loại không được bỏ trống")
        @Pattern(regexp = "^[^\\d]+$", message = "Tên thể loại không được chứa ký tự số")
        private String name;
}
