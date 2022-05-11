package com.revature.revagenda;

import com.revature.revagenda.beans.repositories.TaskRepository;
import com.revature.revagenda.beans.repositories.UserRepository;
import com.revature.revagenda.beans.services.TaskService;
import com.revature.revagenda.beans.services.UserService;
import com.revature.revagenda.entities.Task;
import com.revature.revagenda.entities.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;


import java.util.Set;

//@EnableTransactionManagement  //not necessary here, spring boot applications assume transactional JpaRepositories
@SpringBootApplication(scanBasePackages = "com.revature.revagenda.beans")
public class RevagendaApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(RevagendaApplication.class, args);

//		UserRepository userRepo = context.getBean(UserRepository.class);
//		TaskRepository taskRepo = context.getBean(TaskRepository.class);

		UserService userService = context.getBean(UserService.class);
		TaskService taskService = context.getBean(TaskService.class);

		User testUser = new User("testusername", "testpassword", "testfirstname", "testlastname");
		Task testTask1 = new Task("one", "testTask1");
		Task testTask2 = new Task("two", "testTask2");
		Task testTask3 = new Task("three", "testTask3");

		testUser.addTask(testTask1);
		testUser.addTask(testTask2);
		testUser.addTask(testTask3);

		userService.save(testUser);

		Set<Task> taskSet = testUser.getTasks();
		for (Task task : taskSet) {
			System.out.println(task.getId());
			task.setCompleted(true);
		}

		userService.save(testUser);

		testUser.getTaskByName("one").setCompleted(false);
		userService.save(testUser);

	}

}
