package br.com.hbsis.hbsisproject.response;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "the informed city is not valid")
public class CityNotFoundException extends RuntimeException {
}
