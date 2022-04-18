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

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/proxy")
public class RestProxyController {

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/openshift/audit")
    public void getOpenShiftAudit() {
    }
    //add more
}
