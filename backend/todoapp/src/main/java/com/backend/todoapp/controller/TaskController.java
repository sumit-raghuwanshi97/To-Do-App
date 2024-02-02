// TaskController.java
package com.backend.todoapp.controller;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.backend.todoapp.model.Task;
import com.backend.todoapp.service.TaskService;
import reactor.core.publisher.Mono;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    public Mono<ResponseEntity<Task>> createTask(@RequestBody Task task) {
        //logic for creating a task
        return taskService.createTask(task)
                .map(createdTask -> ResponseEntity.status(HttpStatus.CREATED).body(createdTask))
                .defaultIfEmpty(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
    }
    
   
    @GetMapping
    public Mono<ResponseEntity<List<Task>>> getAllTasks() {
         //logic for retrieving all tasks
        return taskService.getAllTasks()
                .collectList()
                .map(fetchedTasks -> ResponseEntity.ok().body(fetchedTasks))
                .defaultIfEmpty(ResponseEntity.noContent().build());
    }

    @GetMapping("/{taskId}")
    public ResponseEntity<Task> getTaskById(@PathVariable String taskId) {
        return null;
        // Implement logic for retrieving a task by ID
    }

    @PatchMapping("/{taskId}")
    public Mono<ResponseEntity<Task>> updateTask(@PathVariable String taskId, @RequestBody Task updatedTask) {
    return taskService.updateTask(taskId, updatedTask)
            .map(task -> ResponseEntity.ok(task))
            .defaultIfEmpty(ResponseEntity.notFound().build());
}

    
    @DeleteMapping("/{taskId}")
    public Mono<ResponseEntity<Object>> deleteTask(@PathVariable String taskId) {
    return taskService.deleteTask(taskId)
            .then(Mono.defer(() -> Mono.just(ResponseEntity.noContent().<Object>build())))
            .onErrorResume(error -> Mono.just(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()));
     }


    

}
