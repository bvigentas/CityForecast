package br.com.hbsis.hbsisproject.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "city")
public class City {

    @Id
    private ObjectId id;
    private String name;
    private List<Forecast> forecasts  = new ArrayList<Forecast>();

    public List<Forecast> getForecasts() {
        return forecasts;
    }

    public void addForecast( Forecast forecast) {
        this.forecasts.add(forecast);
    }

    public String getId() {
        return id.toHexString();
    }

    public void setId(ObjectId objectId) {
        this.id = objectId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
