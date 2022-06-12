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
    @Size(max = 100)
    private String uid;

    @NotBlank
    @Size(max = 50)
    private String image;

    @NotBlank
    @Size(max = 50)
    private String namespace;

    @NotBlank
    @Size(max = 50)
    private String ownerName;

    @NotBlank
    @Size(max = 50)
    private String ownerKind;

    @NotBlank
    @Size(max = 50)
    private String ownerOwnerName;

    @NotBlank
    @Size(max = 50)
    private String ownerOwnerKind;

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

    private float cve_score;
    private String cve_userInteraction;

    @NotBlank
    @Size(max = 50)
    private String cve_attackComplexity;

    @NotBlank
    @Size(max = 50000)
    private String cve_description;


    private boolean isAlive;

    public KillableContainer() {

    }

    public KillableContainer(String name, String uid, String image, String namespace, String ownerName, String ownerKind, String ownerOwnerName, String ownerOwnerKind, String program, String version, String registry, String cve_impact, String cve_attackVercotr, float cve_score, String cve_userInteraction, String cve_attackComplexity, String cve_description, boolean isAlive) {
        this.name = name;
        this.uid = uid;
        this.image = image;
        this.namespace = namespace;
        this.ownerName = ownerName;
        this.ownerKind = ownerKind;
        this.ownerOwnerName = ownerOwnerName;
        this.ownerOwnerKind = ownerOwnerKind;
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

    public KillableContainer(Container container, CVE cve, boolean isAlive) {
        this.name = container.getName();
        this.uid = container.getUid();
        this.image = container.getImage();
        this.namespace = container.getNamespace();
        this.ownerName = container.getOwnerName();
        this.ownerKind = container.getOwnerKind();
        this.ownerOwnerName = container.getOwnerOwnerName();
        this.ownerOwnerKind = container.getOwnerOwnerKind();
        this.program = container.getProgram();
        this.version = container.getVersion();
        this.registry = container.getRegistry();
        this.cve_impact = cve.getImpact();
        this.cve_attackVercotr = cve.getAttackVector();
        this.cve_score = cve.getScore();
        this.cve_userInteraction = cve.getUserInteraction();
        this.cve_attackComplexity = cve.getAttackComplexity();
        this.cve_description = cve.getDescription();
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

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
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

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getOwnerKind() {
        return ownerKind;
    }

    public void setOwnerKind(String ownerKind) {
        this.ownerKind = ownerKind;
    }

    public String getOwnerOwnerName() {
        return ownerOwnerName;
    }

    public void setOwnerOwnerName(String ownerOwnerName) {
        this.ownerOwnerName = ownerOwnerName;
    }

    public String getOwnerOwnerKind() {
        return ownerOwnerKind;
    }

    public void setOwnerOwnerKind(String ownerOwnerKind) {
        this.ownerOwnerKind = ownerOwnerKind;
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









