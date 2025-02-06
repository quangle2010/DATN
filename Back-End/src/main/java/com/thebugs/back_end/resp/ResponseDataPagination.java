package com.thebugs.back_end.resp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResponseDataPagination {
        private Object objects;
        private int totalItems;
}
