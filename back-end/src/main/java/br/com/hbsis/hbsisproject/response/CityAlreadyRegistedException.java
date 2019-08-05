package br.com.hbsis.hbsisproject.response;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "The city you are trying to register is already in the data base.")
public class CityAlreadyRegistedException extends RuntimeException {}