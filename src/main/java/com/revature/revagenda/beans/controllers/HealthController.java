package com.revature.revagenda.beans.controllers;

import com.revature.revagenda.dtos.ComplexDto;
import com.revature.revagenda.entities.Task;
import com.revature.revagenda.entities.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * This controller is for health checking and metrics
 */

@RestController
@RequestMapping("/health")
public class HealthController {

    @RequestMapping(value = "/ping", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public String ping() {
        return "pong!";
    }

    @RequestMapping(value = "/pong", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public String pong() {
        return "ping!";
    }

    /*
    This is a post method used for showcasing nested objects and lists being serialized. See the ComplexDto
    for more info
     */
    @PostMapping(value = "/complex")
    @ResponseStatus(HttpStatus.OK)
    public ComplexDto test(@RequestBody ComplexDto dto) {
        System.out.println(dto);

        dto = new ComplexDto();
        User user = new User("kplummer", "password", "Kyle", "Plummer");
        user.addTask(new Task(101, "task", "do a task", false));
        user.addTask(new Task(102, "task", "do a task", false));
        user.addTask(new Task(103, "task", "do a task", false));
        dto.setUser(user);
        dto.setString("test string");


        return dto;

    }

}
