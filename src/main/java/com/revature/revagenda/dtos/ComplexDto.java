package com.revature.revagenda.dtos;

import com.revature.revagenda.entities.Task;
import com.revature.revagenda.entities.User;

import java.util.LinkedList;
import java.util.List;


/*
This was example code to show how we can build a DTO which contains other objects nested within, so that we could
for instance send multiple objects in a single request or response.
 */

//JSON Request body example:
/*
{
    "string": "This is a string.",
    "user": {
        "id": 100,
        "username": "kplummer",
        "password": "password",
        "firstName": "Kyle",
        "lastName": "Plummer",
        "tasks": [
            {"id": "101",
            "name": "Do a task",
            "description": "This is a task description",
            "completed": false},
            {"id": "102",
            "name": "Do a task",
            "description": "This is a task description",
            "completed": false}
        ]
    },
    "taskList": [
        {"id": "103",
            "name": "Do a task",
            "description": "This is a task description",
            "completed": false},
        {"id": "104",
            "name": "Do a task",
            "description": "This is a task description",
            "completed": false}
    ]
}
 */


//JSON Response Body Example:
/*
{
    "taskList": null,
    "user": {
        "id": null,
        "username": "kplummer",
        "password": "password",
        "firstName": "Kyle",
        "lastName": "Plummer",
        "tasks": [
            {
                "id": 101,
                "name": "task",
                "description": "do a task",
                "completed": false
            },
            {
                "id": 103,
                "name": "task",
                "description": "do a task",
                "completed": false
            },
            {
                "id": 102,
                "name": "task",
                "description": "do a task",
                "completed": false
            }
        ]
    },
    "string": "test string"
}
 */

public class ComplexDto {
    private List<Task> taskList;
    private User user;
    private String string;

    public ComplexDto() {
    }

    public ComplexDto(User user, String string) {
        this.taskList = new LinkedList<>();
        this.user = user;
        this.string = string;
    }

    public List<Task> getTaskList() {

        return taskList;
    }

    public void setTaskList(List<Task> taskList) {
        this.taskList = taskList;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getString() {
        return string;
    }

    public void setString(String string) {
        this.string = string;
    }

    @Override
    public String toString() {
        return "ComplexDto{" +
                "taskLsit=" + taskList +
                ", user=" + user +
                ", string='" + string + '\'' +
                '}';
    }
}
