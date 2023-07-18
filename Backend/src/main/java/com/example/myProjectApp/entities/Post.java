package com.example.myProjectApp.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="post")
@Data
public class Post {
    @Id
    Long id;
    Long postId;
    String title;
    @Lob
    //bunu yapma nedeni Stringi varchar olarak algılayıp 255 karakter vermemesini sağlamak. String olarak algılatmak.
    @Column(columnDefinition = "text")
    String text;

}

