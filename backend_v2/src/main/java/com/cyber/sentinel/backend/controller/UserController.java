package com.cyber.sentinel.backend.controller;

import com.cyber.sentinel.backend.model.ERole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.cyber.sentinel.backend.model.Role;
import com.cyber.sentinel.backend.model.User;
import com.cyber.sentinel.backend.repository.RoleRepository;
import com.cyber.sentinel.backend.repository.UserRepository;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

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
    @GetMapping("/user")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public String userAccess() {
        return "User";
    }
    @GetMapping("/mod")
    @PreAuthorize("hasRole('MODERATOR')")
    public String moderatorAccess() {
        return "Moderator Board.";
    }
    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {
        return "Admin Board.";
    }

    @GetMapping("/promote/admin/{username}")
    @PreAuthorize("hasRole('ADMIN')")
    public void promoteUserToAdmin(@PathVariable String username){
        Optional<User> curUser = userRepository.findByUsername(username);
        User u = curUser.get();
        Set<Role> roles = u.getRoles();
        roles.add(roleRepository.findByName(ERole.ROLE_ADMIN).get());
        u.setRoles(roles);
        userRepository.save(u);
    }
    @GetMapping("/delete/{user}")
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(){

    }
}