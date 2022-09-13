package com.dev.osapp.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.dev.osapp.api.config.property.OsappProperty;

@SpringBootApplication
@EnableConfigurationProperties(OsappProperty.class)
public class AppApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppApiApplication.class, args);
	}

}
