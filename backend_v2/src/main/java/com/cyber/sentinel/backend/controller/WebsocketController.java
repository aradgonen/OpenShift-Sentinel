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
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class WebsocketController {
    private final SimpMessagingTemplate simpMessagingTemplate;
    String baseUrl = "http://"+System.getenv("PROXY_URL")+"/";
    RestTemplate restTemplate = new RestTemplate();
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
    @GetMapping("/api/proxy/alldeadkc")
    public List<KillableContainer> getAllDeadKc(){
        return killableContainerRepository.findAllByIsAliveFalse();
    }
    @GetMapping("/hide")
    public void closeAlert() {
        simpMessagingTemplate.convertAndSend("/topic/public",
                new MessageBean("alert", "hide"));
    }
    @Scheduled(fixedRate = 10000)
    public void testSchedule() throws InterruptedException {
        System.out.println("Cheking for Threats....");
        List<KillableContainer> killableContainerList = killableContainerRepository.findAll();
        for (KillableContainer kc  : killableContainerList
             ) {
            if(kc.isAlive()) {
            System.out.println(kc.toString());
            simpMessagingTemplate.convertAndSend("/topic/public",
                    new MessageBean("alert", "show"));
//            simpMessagingTemplate.convertAndSend("/topic/soar",
//                    new MessageBean("open-alert", "'Image': '"+kc.getImage() + "','ThreatLevel':'" +kc.getCve_impact()+ "','ID':'" + kc.getId() + "'" ));
            simpMessagingTemplate.convertAndSend("/topic/soar", kc);

                Thread.sleep(5000);
                if (kc.getOwnerOwnerKind().equals("NONE")) {
                    restTemplate.delete(baseUrl + "api/openshift/replicasets/" + kc.getNamespace() + "/" + kc.getOwnerName());
                    simpMessagingTemplate.convertAndSend("/topic/dead",
                            new MessageBean("container", kc.getUid()));
                } else {
                    restTemplate.delete(baseUrl + "api/openshift/deployments/" + kc.getNamespace() + "/" + kc.getOwnerOwnerName());
                    simpMessagingTemplate.convertAndSend("/topic/dead",
                            new MessageBean("container", kc.getUid()));
                }
                kc.setAlive(false);
                killableContainerRepository.flush();
                killableContainerRepository.saveAndFlush(kc);
            }

        }
    }
//    @GetMapping("/start")
//    public void handleThreat() {
//        simpMessagingTemplate.convertAndSend("/topic/soar",
//                new MessageBean("open-alert", "Image: node-10.3.0, ThreatLevel:10"));
//    }
//    @GetMapping("/stop")
//    public void noThreat() {
//        simpMessagingTemplate.convertAndSend("/topic/soarß",
//                new MessageBean("close-alert", "allgood"));
//    }
}
