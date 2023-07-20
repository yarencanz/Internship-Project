package com.example.myProjectApp.repos;

import com.example.myProjectApp.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}