package com.backend.todoapp.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.backend.todoapp.model.Task;

@Repository
public interface TaskRepository extends ReactiveMongoRepository<Task, String> {
    //Add custom queries or methods if needed
}
