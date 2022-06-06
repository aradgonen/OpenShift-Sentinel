package com.cyber.sentinel.backend.repository;

import com.cyber.sentinel.backend.model.Containers.KillableContainer;
import com.cyber.sentinel.backend.model.ERole;
import com.cyber.sentinel.backend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface KillableContainerRepository extends JpaRepository<KillableContainer, Long> {
    Optional<KillableContainer> findByName(String name);
}
