package com.golearn.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.golearn.app.entity.Course;
import com.golearn.app.service.CourseService;

@RestController
public class CourseController {
	
	@Autowired
	CourseService courseService;
	
	@RequestMapping(value = "/addCourse",method = RequestMethod.POST)
	public Course addCource(@RequestBody Course course ) {
		Course savedCourse = courseService.addCourse(course);
		return savedCourse;
	}
	
	@RequestMapping(value = "/listAll")
	public List<Course> listAll() {
		List<Course> courseList = courseService.listAll();
		return courseList;
	}
	

}
