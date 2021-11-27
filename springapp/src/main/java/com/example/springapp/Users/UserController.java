package com.example.springapp.Users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<UserModel> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/signup")
    public boolean addUser(@RequestBody UserModel user) {
        return userService.addUser(user);
    }

    @PostMapping("/login")
    public boolean findUser(@RequestBody UserModel user) {
        return userService.findUser(user);
    }

    @PostMapping("/adminLogin")
    public boolean isAdminUser(@RequestBody UserModel user){
        return userService.isAdminUser(user);
    }
}