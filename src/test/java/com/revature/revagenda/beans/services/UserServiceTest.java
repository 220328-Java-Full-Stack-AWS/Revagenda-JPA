package com.revature.revagenda.beans.services;


import com.revature.revagenda.beans.repositories.UserRepository;
import com.revature.revagenda.dtos.AuthDto;
import com.revature.revagenda.entities.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @MockBean
    UserRepository userRepository;


    @Test
    public void authenticateUserSuccessGoodUsernameAndPass(@Autowired UserService sut) throws Exception {
        //arrange
        AuthDto authDto = new AuthDto("testUsername", "testPassword");
        User user = new User("testUsername", "testPassword", "testFirstName", "testLastName");
        when(userRepository.findByUsername(authDto.getUsername())).thenReturn(user);



        //act
        User returnedUser = sut.authenticateUser(authDto);

        //assert
        Assertions.assertEquals(user, returnedUser);


    }


}
