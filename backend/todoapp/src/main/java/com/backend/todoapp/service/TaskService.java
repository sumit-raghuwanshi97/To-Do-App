package com.backend.todoapp.service;
import java.util.List;
import org.springframework.stereotype.Service;
import com.backend.todoapp.model.Task;
import com.backend.todoapp.repository.TaskRepository;
import reactor.core.publisher.Mono;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Mono<Task> createTask(Task task) {
        // Implement logic for creating a task
        try {
            System.out.println(task.description);
            return taskRepository.save(task);
        } catch (Exception e) {
            return null;
        }
    }
   
    public List<Task> getAllTasks() {
        //Implement logic for retrieving all tasks
        return null;
    }

    public Task getTaskById(String taskId) {
        //Implement logic for retrieving a task by ID
        return null;
    }

    public Task updateTask(String taskId, Task task) {
        // Implement logic for updating a task
        return null;
    }

    public void deleteTask(String taskId) {
        // Implement logic for deleting a task
    }
}
