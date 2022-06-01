package com.cyber.sentinel.backend.scheduledTasks;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestOperations;
import org.springframework.web.client.RestTemplate;

@Service
public class ContainerVerifier {

    RestTemplate restTemplate = new RestTemplate();
    String cveAPI = "http://localhost:5003/api/cve/";
    String containterVersionAPI = "http://localhost:5004/api/images/";


    @Scheduled(fixedDelay = 10000)
    public void scheduleFixedRateTaskAsync() throws InterruptedException {
        String containerListRaw = restTemplate.getForObject(containterVersionAPI+"/list", String.class);
        System.out.println(containerListRaw);
        /**
         * TODO: get all images
         * get all cve that have something todo with the images
         * push to db
         * ???
         * profit
         *
         */
    }
}
