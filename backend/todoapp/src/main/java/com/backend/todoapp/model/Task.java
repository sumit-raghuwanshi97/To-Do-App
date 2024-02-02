package com.backend.todoapp.model;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "tasks")
public class Task {
    public String description;
    public boolean completed;
    //getters, setters, constructors
}

