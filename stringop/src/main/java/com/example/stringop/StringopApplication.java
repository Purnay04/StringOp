package com.example.stringop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = {"com.example.stringop.controllers"})
@SpringBootApplication
public class StringopApplication {

	public static void main(String[] args) {
		SpringApplication.run(StringopApplication.class, args);
	}
}
