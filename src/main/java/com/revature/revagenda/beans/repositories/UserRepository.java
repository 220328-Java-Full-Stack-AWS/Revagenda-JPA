package com.revature.revagenda.beans.repositories;

import com.revature.revagenda.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository

@Transactional
//@Transactional  //not necessary here, spring boot applications assume transactional JpaRepositories
public interface UserRepository extends JpaRepository<User, Integer> {

        /*
    Extending the CrudRepository (by way of JpaRepository) should implement the following CRUD operations for us:
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

    public User findByUsername(String username);
}
