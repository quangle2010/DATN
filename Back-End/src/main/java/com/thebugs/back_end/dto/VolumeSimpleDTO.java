package com.thebugs.back_end.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class VolumeSimpleDTO {
        private Integer id;
        private int volumeNumber;
        private String title;
}
