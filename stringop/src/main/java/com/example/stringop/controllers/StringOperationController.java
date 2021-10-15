package com.example.stringop.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.stringop.pojo.InputString;

@RestController
public class StringOperationController {
	@RequestMapping("/doUppercase")
	public String DoUppercase(
							  @RequestParam("string") String inputed_string) {
		return inputed_string.toUpperCase();
	}
	
	@RequestMapping("/doLowercase")
	public String DoLowercase(
							  @RequestParam("string") String inputed_string) {
		return inputed_string.toLowerCase();
	}
	
	@PostMapping(value= "/doUppercasePOST", consumes = "application/json")
	public String DoUppercasePost(
							  @RequestBody InputString string) {
		return string.getInput_string().toUpperCase();
	}
	
	@PostMapping(value= "/doLowercasePOST", consumes = "application/json")
	public String DoLowercasePost(
			@RequestBody InputString string) {
		return string.getInput_string().toLowerCase();
	}
}
