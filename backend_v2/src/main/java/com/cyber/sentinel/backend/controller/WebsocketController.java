package com.cyber.sentinel.backend.controller;

import com.cyber.sentinel.backend.model.Containers.KillableContainer;
import com.cyber.sentinel.backend.repository.KillableContainerRepository;
import com.cyber.sentinel.backend.security.websocket.MessageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class WebsocketController {
    private final SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    KillableContainerRepository killableContainerRepository;

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
    @Scheduled(fixedRate = 10000)
    public void testSchedule() {
        System.out.println("Cheking for Threats....");
        List<KillableContainer> killableContainerList = killableContainerRepository.findAll();
        for (KillableContainer kc  : killableContainerList
             ) {
            System.out.println(kc.toString());
            simpMessagingTemplate.convertAndSend("/topic/public",
                    new MessageBean("alert", "show"));
            simpMessagingTemplate.convertAndSend("/topic/soar",
                    new MessageBean("open-alert", "Image: "+kc.getImage() + "ThreatLevel:" +kc.getCve_impact()));
        }
    }
    @GetMapping("/start")
    public void handleThreat() {
        simpMessagingTemplate.convertAndSend("/topic/soar",
                new MessageBean("open-alert", "Image: node-10.3.0, ThreatLevel:10"));
    }
    @GetMapping("/stop")
    public void noThreat() {
        simpMessagingTemplate.convertAndSend("/topic/soarß",
                new MessageBean("close-alert", "allgood"));
    }
}
