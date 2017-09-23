package com.golearn.app.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.golearn.app.entity.Course;

public interface CourseRepository extends MongoRepository<Course, Long>{

}
