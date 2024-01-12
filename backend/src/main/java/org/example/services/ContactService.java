package org.example.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.example.repositories.contactRepository;
import org.example.models.contact;

@Service
public class ContactService {

    private final contactRepository contactRepository;

    @Autowired
    public ContactService(contactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public void saveContact(contact contact) {
        contactRepository.save(contact);
    }
}
