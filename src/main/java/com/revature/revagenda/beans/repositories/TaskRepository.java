package com.revature.revagenda.beans.repositories;

import com.revature.revagenda.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
//@Transactional  //not necessary here, spring boot applications assume transactional JpaRepositories
public interface TaskRepository extends JpaRepository<Task, Integer> {
        /*
    Extending the CrudRepository should implement the following CRUD operations for us:
    save()
    saveAll()
    findById()
    existsById()
    findAll()
    findAllById()
    count()
    deleteById()
    delete()
    deleteAll()
     */

    @Query("FROM Task WHERE completed = :completed")
    public List<Task> findByCompleted(@Param("completed") boolean completed);





}
