package com.skillmate.SkillMate.dao;

import com.skillmate.SkillMate.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);

    @Modifying
    @Query(value = "INSERT INTO authorities (username, authority) VALUES ((SELECT username FROM users WHERE username = :username), :authority)", nativeQuery = true)
    void insertUserRole(@Param("username") String username, @Param("authority") String authority);

    // to do later, allow users to login by both email or username
    User findByUsernameOrEmail(String username, String email);
}
