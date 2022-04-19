package com.cyber.sentinel.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cyber.sentinel.backend.model.Role;
import com.cyber.sentinel.backend.model.User;
import com.cyber.sentinel.backend.repository.RoleRepository;
import com.cyber.sentinel.backend.repository.UserRepository;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;
    @GetMapping("/all")
    public List<User> getAllUsersData() {
        return userRepository.findAll();
    }
    @GetMapping("/delete/{user}")
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(){

    }
}