package com.example.currencyconvertor.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/currencyconvertor")
@RestController
public class CurrencyConvertorRestController {
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/INRtoUSD")
	public double inrtousd(@RequestParam("INR") double inr) {
		return inr/73.6;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/USDtoINR")
	public double usdtoinr(@RequestParam("USD") double inr) {
		return inr*73.6;
	}
}
