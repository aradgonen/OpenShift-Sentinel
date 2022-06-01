package com.cyber.sentinel.backend.controller;

import com.cyber.sentinel.backend.security.websocket.MessageBean;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class WebsocketController {
    private final SimpMessagingTemplate simpMessagingTemplate;


    public WebsocketController(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }
    @GetMapping("/show")
    public void openAlert() {
        simpMessagingTemplate.convertAndSend("/topic/public",
                new MessageBean("alert", "show"));
    }
    @GetMapping("/hide")
    public void closeAlert() {
        simpMessagingTemplate.convertAndSend("/topic/public",
                new MessageBean("alert", "hide"));
    }
//    @Scheduled(fixedRate = 5000)
//    public void sendMessage() {
//        System.out.println("a");
//        simpMessagingTemplate.convertAndSend("/topic/public",
//            new MessageBean("alert", "show"));
//    }
    //todo
    //start handling a security threat and then show the alert on the client, and then hide it
}
