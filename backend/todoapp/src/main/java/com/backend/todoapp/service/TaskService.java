package com.backend.todoapp.service;
import java.util.List;
import org.springframework.stereotype.Service;
import com.backend.todoapp.model.Task;
import com.backend.todoapp.repository.TaskRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Mono<Task> createTask(Task task) {
        //logic for creating a task in database
        try {
            System.out.println(task.description);
            return taskRepository.save(task);
        } catch (Exception e) {
            return null;
        }
    }
   
    public Flux<Task> getAllTasks() {
        //logic for retrieving all tasks from database
        return taskRepository.findAll();
    }

    public Task getTaskById(String taskId) {
        //Implement logic for retrieving a task by ID
        return null;
    }

    public Mono<Task> updateTask(String taskId, Task updatedTask) {
        //logic for updating a task 
        return taskRepository.findById(taskId)
                .flatMap(existingTask -> {
                    if (updatedTask.getDescription() != null) {
                        existingTask.setDescription(updatedTask.getDescription());
                    }
                
                    existingTask.setCompleted(updatedTask.isCompleted());
                    return taskRepository.save(existingTask);
                });
    }

    public Mono<Void> deleteTask(String taskId) {
        //logic for deleting a task
        return taskRepository.deleteById(taskId).then();
    }
}
