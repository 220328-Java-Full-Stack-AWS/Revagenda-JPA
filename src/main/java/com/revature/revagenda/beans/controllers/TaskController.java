package com.revature.revagenda.beans.controllers;

import com.revature.revagenda.beans.services.TaskService;
import com.revature.revagenda.entities.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/tasks")
public class TaskController {
    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping(value = "/new")
    @ResponseStatus(HttpStatus.OK)
    public Task createNewTask(@RequestBody Task task) {
        System.out.println("New Task...");
        return taskService.save(task);
    }

    @GetMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Task getTaskById(@PathVariable Integer id) throws Exception {
        System.out.println("get task...");
        Optional<Task> task = taskService.findById(id);
        if(task.isPresent()) {
            return task.get();
        }

        throw new Exception("nope!");
    }
}
