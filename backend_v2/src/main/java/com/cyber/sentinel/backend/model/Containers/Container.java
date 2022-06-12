package com.cyber.sentinel.backend.model.Containers;
import com.cyber.sentinel.backend.model.ERole;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
public class Container {
    private String name;
    private String uid;
    private String image;
    private String namespace;
    private String ownerKind;
    private String ownerName;
     private String program;
    private String version;
    private String registry;
    private String ownerOwnerKind;
    private String ownerOwnerName;

    public Container() {

    }

    public Container(String name, String uid, String image, String namespace, String ownerKind, String ownerName, String program, String version, String registry, String ownerOwnerKind, String ownerOwnerName) {
        this.name = name;
        this.uid = uid;
        this.image = image;
        this.namespace = namespace;
        this.ownerKind = ownerKind;
        this.ownerName = ownerName;
        this.program = program;
        this.version = version;
        this.registry = registry;
        this.ownerOwnerKind = ownerOwnerKind;
        this.ownerOwnerName = ownerOwnerName;
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

    public String getOwnerKind() {
        return ownerKind;
    }

    public void setOwnerKind(String ownerKind) {
        this.ownerKind = ownerKind;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getOwnerOwnerKind() {
        return ownerOwnerKind;
    }

    public void setOwnerOwnerKind(String ownerOwnerKind) {
        this.ownerOwnerKind = ownerOwnerKind;
    }

    public String getOwnerOwnerName() {
        return ownerOwnerName;
    }

    public void setOwnerOwnerName(String ownerOwnerName) {
        this.ownerOwnerName = ownerOwnerName;
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

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }
}









