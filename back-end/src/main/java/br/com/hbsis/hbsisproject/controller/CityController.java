package br.com.hbsis.hbsisproject.controller;

import br.com.hbsis.hbsisproject.model.City;
import br.com.hbsis.hbsisproject.repository.CityRepository;
import br.com.hbsis.hbsisproject.response.CityNotFoundException;
import br.com.hbsis.hbsisproject.weatherAPI.WeatherAPI;
import com.google.gson.Gson;
import org.bson.types.ObjectId;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/city")
public class CityController {

    @Autowired
    private CityRepository repository;
    private Gson gson = new Gson();

    @GetMapping("/{name}")
    public City getCity(@PathVariable String name) {
        return repository.findCityByName(name);
    }

    @GetMapping("/cities")
    public List<City> getCities() {
        return repository.findAll();
    }

    @PostMapping()
    public City postCity(@Validated @RequestBody City city) {
        city.setId(ObjectId.get());
        WeatherAPI weatherAPI = new WeatherAPI();
        String cityWeatherData = weatherAPI.getForecast(city.getName());

        if (cityWeatherData != null) {
            repository.insert(city);
        } else {
            throw new CityNotFoundException();
        }
        return city;
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteCity(@PathVariable ObjectId id) {
        City city = repository.findCityById(id);
        repository.delete(city);

        Map<String, Boolean> result = new HashMap<>();
        result.put("deleted", true);
        return result;
    }

    @PutMapping("{id}")
    public City updateCity(@PathVariable ObjectId id, @Validated @RequestBody City city) {
        City currentCity = repository.findCityById(id);
        BeanUtils.copyProperties(city, currentCity);
        repository.save(currentCity);
        return currentCity;
    }
}
