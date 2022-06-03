package com.cyber.sentinel.backend.model.Containers;
import com.cyber.sentinel.backend.model.ERole;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
public class Container {
    private String name;
    private String image;
    private String namespace;
    private String owner;
     private String program;
    private String version;
    private String registry;

    public Container() {

    }

    public Container(String name, String image, String namespace, String owner, String program, String version, String registry) {        this.name = name;
        this.image = image;
        this.namespace = namespace;
        this.owner = owner;
        this.program = program;
        this.version = version;
        this.registry = registry;
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
}









