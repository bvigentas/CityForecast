package br.com.hbsis.hbsisproject.controller;

import br.com.hbsis.hbsisproject.model.City;
import br.com.hbsis.hbsisproject.repository.CityRepository;
import br.com.hbsis.hbsisproject.response.CityNotFoundException;
import br.com.hbsis.hbsisproject.response.NoCitiesFoundException;
import br.com.hbsis.hbsisproject.util.PropertyProvider;
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
    /**
     *  Se o front-end subir em uma porta diferente da 3000, a constante abaixo deve ser ajustada para a porta correta,
     *  para que erros de CORS não ocorram.
     */
    private static final String uriFrontend = "http://localhost:3000";

    @CrossOrigin(origins = uriFrontend)
    @GetMapping("/{name}")
    public City getCity(@PathVariable String name) {
        return repository.findCityByName(name);
    }

    @CrossOrigin(origins = uriFrontend)
    @GetMapping("/cities")
    public List<City> getCities() {
        List<City> cities = repository.findAll();
        if (cities == null || cities.size() == 0) {
            throw new NoCitiesFoundException();
        }
        return cities;
    }

    @CrossOrigin(origins = uriFrontend)
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

    @CrossOrigin(origins = uriFrontend)
    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteCity(@PathVariable ObjectId id) {
        City city = repository.findCityById(id);
        repository.delete(city);

        Map<String, Boolean> result = new HashMap<>();
        result.put("deleted", true);
        return result;
    }

    @CrossOrigin(origins = uriFrontend)
    @PutMapping("{id}")
    public City updateCity(@PathVariable ObjectId id, @Validated @RequestBody City city) {
        City currentCity = repository.findCityById(id);
        BeanUtils.copyProperties(city, currentCity);
        repository.save(currentCity);
        return currentCity;
    }
}
