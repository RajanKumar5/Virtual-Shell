package com.example.springapp.Users;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserModel, String> {
    
}
