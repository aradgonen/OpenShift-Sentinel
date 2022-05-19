package com.cyber.sentinel.backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.json.JSONObject;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/compliance")
public class ComplianceGitController {
    String baseUrl = "http://localhost:5002";
    RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/files/all")
    public String gitTreeYaml(){
        JSONObject jsonObject = new JSONObject(restTemplate.getForObject(baseUrl + "/api/yaml/all", String.class));
        return jsonObject.toString();
    }

    @GetMapping("/files")
    public String gitYamlFile(@RequestParam String filepath) {
        JSONObject jsonObject = new JSONObject(restTemplate.getForObject(baseUrl + "/api/yaml/?file=" + filepath, String.class));
        return jsonObject.toString();
    }
}
