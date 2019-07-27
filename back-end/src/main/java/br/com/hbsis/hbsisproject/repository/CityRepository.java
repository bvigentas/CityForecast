package br.com.hbsis.hbsisproject.repository;

import br.com.hbsis.hbsisproject.model.City;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CityRepository extends MongoRepository<City, String> {
    City findCityByName(String name);

    City findCityById(ObjectId id);
}
