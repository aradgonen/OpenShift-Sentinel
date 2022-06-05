package com.cyber.sentinel.backend.controller;

import com.cyber.sentinel.backend.security.websocket.MessageBean;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
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
    @Scheduled(fixedRate = 5000)
    public void testSchedule() {
        System.out.println("Cheking for Threats....");
        //access to threats db
        //take the first row
        //handle it
        //delete it
    }
    @GetMapping("/start")
    public void handleThreat() {
        simpMessagingTemplate.convertAndSend("/topic/public",
                new MessageBean("open-alert", "Image: node-10.3.0, ThreatLevel:10"));
    }
    @GetMapping("/stop")
    public void noThreat() {
        simpMessagingTemplate.convertAndSend("/topic/public",
                new MessageBean("close-alert", "allgood"));
    }
}
