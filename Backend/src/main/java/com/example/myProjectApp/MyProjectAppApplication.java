package com.example.myProjectApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude={SecurityAutoConfiguration.class})
public class MyProjectAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyProjectAppApplication.class, args);
	}

}
