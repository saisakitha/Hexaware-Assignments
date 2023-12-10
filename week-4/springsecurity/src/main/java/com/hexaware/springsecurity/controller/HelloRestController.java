package com.hexaware.springsecurity.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/security")
public class HelloRestController {
	@GetMapping(value="/hello")
	public String hello()
	{
		return "Hello WElcome";
	}

}
