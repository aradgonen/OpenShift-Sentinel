package com.cyber.sentinel.backend.controller;


import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.json.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/proxy")
public class RestProxyController {
    String baseUrl = "http://"+System.getenv("PROXY_URL")+"/";
    RestTemplate restTemplate = new RestTemplate();

    //    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/openshift/soar/namespaces")
    public String getListOfNamespaces() {
        JSONObject rawJsonResponse = new JSONObject(restTemplate.getForObject(baseUrl+"api/openshift/namespaces",String.class));
        JSONObject namespaces = new JSONObject();
        ArrayList namespaceList = (ArrayList) rawJsonResponse.toMap().get("items");
        for (Object namespace: namespaceList
        ) {
            String curName = ((HashMap)((HashMap) namespace).get("metadata")).get("name").toString();
            namespaces.append("namespaces",curName);
        }
        return namespaces.toString();
    }
    @GetMapping("/openshift/soar/pods")
    public String getListOfPods() {
        JSONObject rawJsonResponse = new JSONObject(restTemplate.getForObject(baseUrl+"api/openshift/pods",String.class));
        JSONObject pods = new JSONObject();
        ArrayList podList = (ArrayList) rawJsonResponse.toMap().get("items");
        for (Object pod: podList
        ) {
            String curName = ((HashMap)((HashMap) pod).get("metadata")).get("name").toString();
            String curNamespace = ((HashMap)((HashMap) pod).get("metadata")).get("namespace").toString();
            pods.append(curNamespace,curName);
            System.out.println();
        }
        return pods.toString();
    }
    @RequestMapping(value = "/openshift/soar/pods/{namespace}/{pod}", method = RequestMethod.DELETE)
    public void deletePod(@PathVariable("namespace") String namespace, @PathVariable("pod") String pod) {
        restTemplate.delete(baseUrl+"api/openshift/pods/"+namespace+"/"+pod);
    }

    @RequestMapping(value = "/openshift/soar/deployments/{namespace}/{deployment}", method = RequestMethod.DELETE)
    public void deleteDeployment(@PathVariable("namespace") String namespace, @PathVariable("pod") String deployment) {
        restTemplate.delete(baseUrl+"api/openshift/deployments/"+namespace+"/"+deployment);//fix
    }
    @RequestMapping(value = "/openshift/soar/replicaset/{namespace}/{replicaset}", method = RequestMethod.DELETE)
    public void deleteReplicaset(@PathVariable("namespace") String namespace, @PathVariable("pod") String replicaset) {
        restTemplate.delete(baseUrl+"api/openshift/replicasets/"+namespace+"/"+replicaset);//fix
    }
    @RequestMapping(value = "/audit/log/countbyusername")
    public String getAuditEventCountByUser() {
        String raw_data = restTemplate.getForObject(baseUrl+"api/mongodb/audit/log/countbyusername",String.class);
        return raw_data;
    }
    @RequestMapping(value = "/audit/log/uris")
    public String getAuditURISCountByUser() {
        String raw_data = restTemplate.getForObject(baseUrl+"api/mongodb/audit/log/uris",String.class);
        return raw_data;
    }
    @RequestMapping(value = "/audit/log/all")
    public String getAllAuditEvents() {
        String raw_data = restTemplate.getForObject(baseUrl+"api/mongodb/audit/log/all",String.class);
        return raw_data;
    }
}