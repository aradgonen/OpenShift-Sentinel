package com.cyber.sentinel.backend.repository;

import com.cyber.sentinel.backend.model.ERole;
import com.cyber.sentinel.backend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}