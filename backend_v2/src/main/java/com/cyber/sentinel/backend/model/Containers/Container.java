package com.cyber.sentinel.backend.model.Containers;
import com.cyber.sentinel.backend.model.ERole;

import javax.persistence.*;

@Entity
@Table(name = "containers")
public class Container {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole name;
