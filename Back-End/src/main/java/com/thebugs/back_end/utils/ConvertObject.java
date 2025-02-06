package com.thebugs.back_end.utils;

public class ConvertObject {

        public static Double convertToDouble(Object value) {
                try {
                        if (value instanceof Double) {
                                return (Double) value;
                        } else if (value instanceof Number) {
                                return ((Number) value).doubleValue();
                        }
                } catch (Exception e) {
                        System.out.println("Lỗi: " + e.getMessage());
                }
                return null;
        }

        public static Integer convertToInteger(Object value) {
                try {
                        if (value instanceof Integer) {
                                return (Integer) value;
                        } else if (value instanceof Number) {
                                return ((Number) value).intValue();
                        }
                } catch (Exception e) {
                        System.out.println("Lỗi: " + e.getMessage());
                }
                return null;
        }

}
