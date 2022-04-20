package com.cyber.sentinel.backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/deploy")
public class PolicyDeploymentController {
    RestTemplate restTemplate = new RestTemplate();
    String baseUrl = "http://localhost:5001/";

    @GetMapping("/policies")
    public String deployPolicies() throws JsonProcessingException {
        JSONObject jsonObject = new JSONObject(restTemplate.getForObject(baseUrl + "api/deploy", String.class));
        return jsonObject.toString();
    }
}