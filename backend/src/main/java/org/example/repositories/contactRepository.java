package org.example.repositories;

import org.example.models.contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface contactRepository extends JpaRepository<contact, Integer> {
}

