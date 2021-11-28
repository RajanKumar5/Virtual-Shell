package com.example.springapp.Courses;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class CourseController {
    
    @Autowired
    CourseService courseService;

    @GetMapping("/courses")
    public List<CourseModel> getCourses(){
        return courseService.getCourses();
    }

    @PostMapping("/createCourse")
    public boolean createCourse(@RequestBody CourseModel course){
        return courseService.createCourse(course);
    }

    @GetMapping("/courses/{courseId}")
    public CourseModel getCourseDetails(@PathVariable Long courseId){
        return courseService.getCourseDetails(courseId);
    }

    @GetMapping("/courses/delete/{courseId}")
    public boolean deleteCourse(@PathVariable Long courseId){
        return courseService.deleteCourse(courseId);
    }

    @PutMapping("/editCourse")
    public boolean updateCourse(@RequestBody CourseModel course){
        return courseService.updateCourse(course);
    }
}
