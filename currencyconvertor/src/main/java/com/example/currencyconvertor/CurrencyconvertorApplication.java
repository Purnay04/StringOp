package com.example.currencyconvertor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@ComponentScan(basePackages = {"com.example.currencyconvertor.controller"})
@SpringBootApplication
public class CurrencyconvertorApplication {

	public static void main(String[] args) {
		SpringApplication.run(CurrencyconvertorApplication.class, args);
	}

}
