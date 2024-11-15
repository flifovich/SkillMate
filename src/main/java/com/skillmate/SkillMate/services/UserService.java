package com.skillmate.SkillMate.services;

import com.skillmate.SkillMate.dao.UserRepository;
import com.skillmate.SkillMate.entity.User;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Transactional
    public void registerUser(String email, String username, String password) {
        // check if user already exists by username and email
        if (userRepository.findByUsername(username) != null) {
            throw new RuntimeException("Username already exists");
        }
        if (userRepository.findByEmail(email) != null) {
            throw new RuntimeException("Email already exists");
        }

        // encode password for user
        String encodedPassword = passwordEncoder.encode(password);
        User user = new User(email, username, encodedPassword, true);
        System.out.println(user.toString());
        userRepository.save(user);

        // every user by default will be given role user
        userRepository.insertUserRole(username, "ROLE_USER");
    }



}
