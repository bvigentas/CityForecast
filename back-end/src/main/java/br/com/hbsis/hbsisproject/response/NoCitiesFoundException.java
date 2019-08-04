package br.com.hbsis.hbsisproject.response;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "There are no cities registred yet. Register a city and comeback.")
public class NoCitiesFoundException extends RuntimeException {
}
