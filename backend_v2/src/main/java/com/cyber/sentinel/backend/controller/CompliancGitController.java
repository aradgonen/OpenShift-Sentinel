package com.cyber.sentinel.backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/compliance")
public class CompliancGitController {
    String baseUrl = "http://localhost:5002";
    RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/files/all")
    public String gitTreeYaml(){
        JSONObject jsonObject = new JSONObject(restTemplate.getForObject(baseUrl + "/api/yaml/all", String.class));
        return jsonObject.toString();
    }

    @PostMapping("/files/")
    public String gitYamlFile(@RequestBody String filepath){
        JSONObject jsonObject = new JSONObject(restTemplate.getForObject(baseUrl + "/api/yaml/" + filepath, String.class));
        return jsonObject.toString();
    }
}
