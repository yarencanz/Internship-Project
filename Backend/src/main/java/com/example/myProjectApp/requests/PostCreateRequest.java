package com.example.myProjectApp.requests;

import lombok.Data;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;

@Data
public class PostCreateRequest {

    Long id;
    String text;
    String title;
    Long userId;
}
