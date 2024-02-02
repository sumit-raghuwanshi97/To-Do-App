// TaskController.java
package com.backend.todoapp.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.backend.todoapp.model.Task;
import com.backend.todoapp.service.TaskService;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    public Mono<ResponseEntity<Task>> createTask(@RequestBody Task task) {
        // Implement logic for creating a task
        return taskService.createTask(task)
                .map(createdTask -> ResponseEntity.status(HttpStatus.CREATED).body(createdTask))
                .defaultIfEmpty(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
    }

    @GetMapping
    public ResponseEntity<List<Task>> getAllTasks() {
        return null;
        // Implement logic for retrieving all tasks
    }

    @GetMapping("/{taskId}")
    public ResponseEntity<Task> getTaskById(@PathVariable String taskId) {
        return null;
        // Implement logic for retrieving a task by ID
    }

    @PutMapping("/{taskId}")
    public ResponseEntity<Task> updateTask(@PathVariable String taskId, @RequestBody Task task) {
        return null;
        // Implement logic for updating a task
    }

    @DeleteMapping("/{taskId}")
    public ResponseEntity<Void> deleteTask(@PathVariable String taskId) {
        return null;
        // Implement logic for deleting a task
    }
}
