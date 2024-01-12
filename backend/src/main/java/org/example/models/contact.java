package org.example.models;
import jakarta.persistence.*;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="contact")
public class contact {


        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private int id;

        @Column(name="username")
        private String username;

        @Column(name="firstName")
        @NotBlank
        private String firstName;

        @Column(name = "lastName")
        @NotBlank
        private String lastName;

        @Column(name="email")
        @NotBlank
        private String email;

        @Column(name = "notes")
        @Size(min=1,max=250, message = "Please enter a message up to 250 chars")
        private String notes;


        public contact() {

        }

        public contact(int id, String username, String firstName, String lastName, String email, String notes) {
            this.id = id;
            this.username= username;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.notes = notes;
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getUsername(){return username;}

        public void setUsername(String username) {this.username = username;}

        public String getFirstName() {
            return firstName;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public String getLastName() {
        return lastName;
    }

        public void setLastName(String lastName) {
        this.lastName = lastName;
    }

        public String getEmail(){return email;}

        public void setEmail(String email){this.email=email;}


        public String getNotes() {
            return notes;
        }

        public void setNotes(String notes) {
            this.notes = notes;
        }



        @Override
        public String toString() {
            return "contact{" +
                    "id=" + id +
                    ", username=" + username +
                    ", firstName=" + firstName +
                    ", lastName=" + lastName +
                    ", email=" +email+
                    ", notes='" + notes + '\'' +
                    '}';
        }

    }

