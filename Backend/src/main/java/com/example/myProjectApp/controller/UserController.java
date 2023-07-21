package com.example.myProjectApp.controller;

import com.example.myProjectApp.entities.User;
import com.example.myProjectApp.repos.UserRepository;
import com.example.myProjectApp.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;

    public UserController(UserService userService){
         this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping
    public User createUser(@RequestBody User newUser){
        return userService.saveOneUser(newUser);
    }

    @GetMapping("/{userId}")
    public User getOneUser(@PathVariable Long userId){
        return userService.getOneUser(userId);
    }
    @PutMapping("/{userId}")
    public User updateOneUser(@PathVariable Long userId, @RequestBody User newUser) {
       return userService.updateOneUser(userId,newUser);
    }
    @DeleteMapping("/{userId}")
    public boolean deleteOneUser(@PathVariable Long userId){
        return userService.deleteById(userId);
    }
}
