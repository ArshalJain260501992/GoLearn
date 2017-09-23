package com.golearn.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.golearn.app.dao.CourseRepository;
import com.golearn.app.entity.Course;

@Component
public class CourseService {
	
	@Autowired
	CourseRepository  courseRepository;
	
	public Course addCourse(Course course) {
		Course savedCourse = courseRepository.save(course);
		return savedCourse;
		
	}
	
	public List<Course> listAll(){
		List<Course> courseList = courseRepository.findAll();
		return courseList;
		
	}

}
