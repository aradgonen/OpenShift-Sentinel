package com.cyber.sentinel.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String root() {
        return "index";
    }

    @GetMapping("/login")
    public String login(Model model) {
        return "login";
    }
    @GetMapping("/registration")
    public String registration(Model model) {
        return "registration";
    }
    @GetMapping("/user")
    public String userIndex() {
        return "user/index";
    }
}