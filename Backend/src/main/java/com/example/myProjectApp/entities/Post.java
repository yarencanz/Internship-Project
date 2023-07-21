package com.example.myProjectApp.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name="post")
@Data
public class Post {
    @Id
    Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action =  OnDeleteAction.CASCADE)
    @JsonIgnore
    User user;
    String title;
    @Lob
    //bunu yapma nedeni Stringi varchar olarak algılayıp 255 karakter vermemesini sağlamak. String olarak algılatmak.
    @Column(columnDefinition = "text")
    String text;

}

