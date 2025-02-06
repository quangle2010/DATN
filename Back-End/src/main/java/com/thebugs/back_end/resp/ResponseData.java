package com.thebugs.back_end.resp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResponseData {
        private boolean status;
        private String message;
        private Object data;
}
