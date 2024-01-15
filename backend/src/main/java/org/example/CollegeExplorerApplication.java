/*
Entry point of the Spring Boot application.
Configures the application, initializes Spring context, and starts the application.
*/
package org.example;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "org.example.models")
public class CollegeExplorerApplication {

    public static void main(String[] args) {
        SpringApplication.run(CollegeExplorerApplication.class, args);
    }
}