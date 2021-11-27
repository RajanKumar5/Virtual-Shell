package com.example.springapp.Users;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<UserModel> getAllUsers(){
        List<UserModel> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    public boolean addUser(UserModel user){
        if (userRepository.findById(user.getEmail()).isEmpty()) {
            userRepository.save(user);
            return true;
        }
        return false;
    }

    public boolean findUser(UserModel user) {
        if (!userRepository.findById(user.getEmail()).isEmpty()) {
            UserModel dataUser = userRepository.findById(user.getEmail()).get();
            String username = dataUser.getEmail();
            String password = dataUser.getPassword();
            return username.equals(user.getEmail()) && password.equals(user.getPassword());
        }
        return false;
    }

    public boolean isAdminUser(UserModel user){
        UserModel dataUser = userRepository.findById(user.getEmail()).get();
        if(dataUser.getRole().equals("admin")){
            return true;
        }
        return false;
    }
}
