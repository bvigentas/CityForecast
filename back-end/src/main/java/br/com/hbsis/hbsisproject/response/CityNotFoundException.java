package br.com.hbsis.hbsisproject.response;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "The informed city is not valid in the Open Weather API")
public class CityNotFoundException extends RuntimeException {
}
