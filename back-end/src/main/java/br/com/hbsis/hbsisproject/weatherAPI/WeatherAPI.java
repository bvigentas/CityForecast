package br.com.hbsis.hbsisproject.weatherAPI;

import org.springframework.web.client.RestTemplate;

public class WeatherAPI {

    public String getForecast(String cityName) {
        final String uri = "https://api.openweathermap.org/data/2.5/forecast?q={cityName}&APPID=eb8b1a9405e659b2ffc78f0a520b1a46";

        RestTemplate restTemplate = new RestTemplate();
        try {
            String result = restTemplate.getForObject(uri, String.class, cityName);
            return result;
        } catch (Exception e) {
            return null;
        }

    }
}
