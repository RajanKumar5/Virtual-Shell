package com.example.springapp.Users;

import java.util.ArrayList;
import java.util.List;

import com.example.springapp.PasswordEncryption.MD5Utils;

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
            String encryptedPassword = MD5Utils.encryptPassword(user.getPassword());
            user.setPassword(encryptedPassword);
            userRepository.save(user);
            return true;
        }
        return false;
    }

    public boolean findUser(UserModel user) {
        if (!userRepository.findById(user.getEmail()).isEmpty()) {
            String encryptedPassword = MD5Utils.encryptPassword(user.getPassword());
            user.setPassword(encryptedPassword);
            UserModel db = userRepository.findById(user.getEmail()).get();
            String username = db.getEmail();
            String password = db.getPassword();
            return username.equals(user.getEmail()) && password.equals(user.getPassword());
        }
        return false;
    }

    public boolean isAdminUser(UserModel user){
        String encryptedPassword = MD5Utils.encryptPassword(user.getPassword());
        user.setPassword(encryptedPassword);
        UserModel db = userRepository.findById(user.getEmail()).get();
        if(db.getRole().equals("admin")){
            return true;
        }
        return false;
    }

    public boolean deleteUser(String userId){
        try{
            userRepository.deleteById(userId);
            return true;
        }
        catch(Exception e){
            return false;
        }
    }

    public boolean updateUser(UserModel user){
        try{
            UserModel db = userRepository.findById(user.getEmail()).get();
            if(!db.getPassword().equals(user.getPassword())){
                String encryptedPassword = MD5Utils.encryptPassword(user.getPassword());
                user.setPassword(encryptedPassword);
            }
            userRepository.save(user);
            return true;
        }
        catch(Exception e){
            return false;
        }
    }

    public UserModel getUserDetails(String userId){
        try{
            return userRepository.findById(userId).get();
        }
        catch(Exception e){
            return null;
        }
        
    }
}
