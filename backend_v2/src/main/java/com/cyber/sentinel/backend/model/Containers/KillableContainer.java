package com.cyber.sentinel.backend.model.Containers;
import com.cyber.sentinel.backend.model.ERole;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "killable_container")
public class KillableContainer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank
    @Size(max = 50)
    private String name;

    @NotBlank
    @Size(max = 50)
    private String image;

    @NotBlank
    @Size(max = 50)
    private String namespace;

    @NotBlank
    @Size(max = 50)
    private String owner;

    @NotBlank
    @Size(max = 50)
    private String program;

    @NotBlank
    @Size(max = 50)
    private String version;

    @NotBlank
    @Size(max = 50)
    private String registry;

    @NotBlank
    @Size(max = 50)
    private String cve_impact;

    @NotBlank
    @Size(max = 50)
    private String cve_attackVercotr;

    @NotBlank
    @Size(max = 50)
    private float cve_score;
    private String cve_userInteraction;

    @NotBlank
    @Size(max = 50)
    private String cve_attackComplexity;

    @NotBlank
    @Size(max = 50)
    private String cve_description;

    @NotBlank
    @Size(max = 50)
    private boolean isAlive;

    public KillableContainer() {

    }

    public KillableContainer(String name, String image, String namespace, String owner, String program, String version, String registry, String cve_impact, String cve_attackVercotr, float cve_score, String cve_userInteraction, String cve_attackComplexity, String cve_description, boolean isAlive) {
        this.name = name;
        this.image = image;
        this.namespace = namespace;
        this.owner = owner;
        this.program = program;
        this.version = version;
        this.registry = registry;
        this.cve_impact = cve_impact;
        this.cve_attackVercotr = cve_attackVercotr;
        this.cve_score = cve_score;
        this.cve_userInteraction = cve_userInteraction;
        this.cve_attackComplexity = cve_attackComplexity;
        this.cve_description = cve_description;
        this.isAlive = isAlive;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getNamespace() {
        return namespace;
    }

    public void setNamespace(String namespace) {
        this.namespace = namespace;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getProgram() {
        return program;
    }

    public void setProgram(String program) {
        this.program = program;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getRegistry() {
        return registry;
    }

    public void setRegistry(String registry) {
        this.registry = registry;
    }

    public String getCve_impact() {
        return cve_impact;
    }

    public void setCve_impact(String cve_impact) {
        this.cve_impact = cve_impact;
    }

    public String getCve_attackVercotr() {
        return cve_attackVercotr;
    }

    public void setCve_attackVercotr(String cve_attackVercotr) {
        this.cve_attackVercotr = cve_attackVercotr;
    }

    public float getCve_score() {
        return cve_score;
    }

    public void setCve_score(float cve_score) {
        this.cve_score = cve_score;
    }

    public String getCve_userInteraction() {
        return cve_userInteraction;
    }

    public void setCve_userInteraction(String cve_userInteraction) {
        this.cve_userInteraction = cve_userInteraction;
    }

    public String getCve_attackComplexity() {
        return cve_attackComplexity;
    }

    public void setCve_attackComplexity(String cve_attackComplexity) {
        this.cve_attackComplexity = cve_attackComplexity;
    }

    public String getCve_description() {
        return cve_description;
    }

    public void setCve_description(String cve_description) {
        this.cve_description = cve_description;
    }

    public boolean isAlive() {
        return isAlive;
    }

    public void setAlive(boolean alive) {
        isAlive = alive;
    }
}









