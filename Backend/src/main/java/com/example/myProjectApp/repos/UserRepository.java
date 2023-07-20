package com.example.myProjectApp.repos;

import com.example.myProjectApp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
