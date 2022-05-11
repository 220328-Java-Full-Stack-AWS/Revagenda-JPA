package com.revature.revagenda;

import com.revature.revagenda.beans.services.TaskService;
import com.revature.revagenda.beans.services.UserService;
import com.revature.revagenda.entities.Task;
import com.revature.revagenda.entities.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;


import java.util.Set;

//@EnableTransactionManagement  //not necessary here, spring boot applications assume transactional JpaRepositories
/*
Spring boot application implies a number of other annotations including @EnableAutoConfiguration
and @ComponentScan to name the most important ones. Because this is an alias for ComponentScan we can
add the attribute scanBasePackages like we would with @ComponentScan.
Spring boot also assumes a very opinionated configuration.
 */
@SpringBootApplication(scanBasePackages = "com.revature.revagenda.beans")
public class RevagendaApplication {

	public static void main(String[] args) {
		/*
		Here we launch out spring application, it runs in it's own thread so the rest of main continues executing
		after the spring application has initialized and assigned it's context to the reference below.

		We want the context object so that we can request beans manually from it.
		 */
		ConfigurableApplicationContext context = SpringApplication.run(RevagendaApplication.class, args);

		/*
		Here we retrieve our beans by type by invoking the getBean() method and providing a class description
		 */
		UserService userService = context.getBean(UserService.class);
		TaskService taskService = context.getBean(TaskService.class);

		/*
		Now we set up our test objects. The three tasks are all associated with the user and the user has a set<Task> which
		all three tasks get added into. This happens in the model's addTask() method. It's good practice to write
		the process of establishing these bidirectional links as part of one step so we don't forget to do some of it later.
		 */
		User testUser = new User("testusername", "testpassword", "testfirstname", "testlastname");
		Task testTask1 = new Task("one", "testTask1");
		Task testTask2 = new Task("two", "testTask2");
		Task testTask3 = new Task("three", "testTask3");

		testUser.addTask(testTask1);
		testUser.addTask(testTask2);
		testUser.addTask(testTask3);

		/*
		Here we are checking that the ID's for tasks are null. These will get filled out after the objects are persisted.
		 */
		System.out.println("Before save");
		Set<Task> taskSet = testUser.getTasks();
		/*
		Note that we are pulling the tasks from the user object, not the database and we are not using the references
		we wrote above.
		 */
		for (Task task : taskSet) {
			System.out.println(task.getId());
			task.setCompleted(true);
		}

		//Here we call save and persist the user object, and it's sub-objects (the tasks)
		userService.save(testUser);

		/*
		Now we grab those tasks from the user object again, and see that their auto generated ID's are present.
		 */
		System.out.println("After save");
		taskSet = testUser.getTasks();
		for (Task task : taskSet) {
			System.out.println(task.getId());
			task.setCompleted(true);//we are also setting the tasks to complete in this step.
		}

		//Now we save the user again, and it should persist the changes we made to the tasks
		userService.save(testUser);

		//Once more we change a task and save the associated user to persist the changes.
		testUser.getTaskByName("one").setCompleted(false);
		userService.save(testUser);

		/*
		Not that nowhere here did we explicitly start or commit any transactions. Our JpaRepositories
		automatically have transactional behavior. If we wanted to adjust this behavior, like
		changing isolation level or propagation strategy we would need to use the @Transactional annotation
		 */

	}

}
