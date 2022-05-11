package com.revature.revagenda.beans.services;

import com.revature.revagenda.beans.repositories.TaskRepository;
import com.revature.revagenda.entities.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Optional<Task> findById(Integer id) {
        return taskRepository.findById(id);
    }

    public List<Task> findAllCompleted() {
        return taskRepository.findByCompleted(true);
    }

    public Task save(Task task) {
        return taskRepository.save(task);
    }

}
