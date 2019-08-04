package br.com.hbsis.hbsisproject.weatherAPI;

import br.com.hbsis.hbsisproject.util.PropertyProvider;
import org.springframework.web.client.RestTemplate;

public class WeatherAPI {

    public String getForecast(String cityName) {
        final String uri = "https://api.openweathermap.org/data/2.5/forecast?q={cityName}&APPID={apiKey}";

        RestTemplate restTemplate = new RestTemplate();
        try {
            String result = restTemplate.getForObject(uri, String.class, cityName, PropertyProvider.getProperty("api-key"));
            return result;
        } catch (Exception e) {
            return null;
        }

    }
}
