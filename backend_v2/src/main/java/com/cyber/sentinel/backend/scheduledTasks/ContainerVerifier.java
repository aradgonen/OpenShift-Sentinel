package com.cyber.sentinel.backend.scheduledTasks;

import com.cyber.sentinel.backend.model.Containers.CVE;
import com.cyber.sentinel.backend.model.Containers.Container;
import com.cyber.sentinel.backend.model.Containers.KillableContainer;
import com.cyber.sentinel.backend.repository.KillableContainerRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestOperations;
import org.springframework.web.client.RestTemplate;

import javax.validation.constraints.Null;

@Service
public class ContainerVerifier {

    RestTemplate restTemplate = new RestTemplate();
    String containterVersionAPI = "http://localhost:5004/api/images/";
    String cveAPI = "http://localhost:5003/api/cve/";

    @Autowired
    KillableContainerRepository killableContainerRepository;

    @Scheduled(fixedDelay = 1000)
    public void scheduleFixedRateTaskAsync() throws InterruptedException {
        ResponseEntity<Container[]> containerResponse = restTemplate.getForEntity(containterVersionAPI+"/list", Container[].class);
        Container[] containers = containerResponse.getBody();


        System.out.println(containers);

        for (Container container : containers) {
            //ResponseEntity<CVE[]> cveResponse = restTemplate.getForEntity(cveAPI+"/list?keyword=" + container.getProgram() + "&version=" + container.getVersion(), CVE[].class);
            ResponseEntity<CVE[]> cveResponse = restTemplate.getForEntity(cveAPI+"/list?keyword=" + container.getProgram() + "&version=" + "6.0", CVE[].class);
            CVE[] cves = cveResponse.getBody();

            if(cves.length != 0) {
                float maxCveScore = 0;
                CVE worstCVE = new CVE(cves[0]);

                for (CVE cve : cves) {
                    if ( maxCveScore < cve.getScore() ) {
                        maxCveScore =  cve.getScore();
                        worstCVE = new CVE(cve);
                    }
                }
                if (killableContainerRepository.findByName(container.getName()).isEmpty()) {
                    KillableContainer killableContainer = new KillableContainer(container, worstCVE, true);
                }
            }
            System.out.println();
        }

        //JSONObject jsonObject = new JSONObject(restTemplate.getForObject(cveAPI+"/list", String.class));
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
