package br.com.brunovigentas.hbsisproject.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Cidade {

    @Id
    public ObjectId id;

    public String nome;
    public Long longitude;
    public Long latitude;

    public Cidade() {
    }

    public Cidade(ObjectId id, String nome) {
        this.id = id;
        this.nome = nome;
    }
}
