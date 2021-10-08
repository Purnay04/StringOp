package com.example.stringop.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StringOperationController {
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/doUppercase")
	public String DoUppercase(
							  @RequestParam("string") String inputed_string) {
		return inputed_string.toUpperCase();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/doLowercase")
	public String DoLowercase(
							  @RequestParam("string") String inputed_string) {
		return inputed_string.toLowerCase();
	}
}
