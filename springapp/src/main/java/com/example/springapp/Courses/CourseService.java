package com.example.springapp.Courses;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService {
    
    @Autowired
    CourseRepository courseRepository;

    public boolean createCourse(CourseModel course){
        try{
            courseRepository.save(course);
            return true;
        }
        catch(Exception e){
            return false;
        }
    }

    public List<CourseModel> getCourses(){
        List<CourseModel> courses = new ArrayList<>();
        courseRepository.findAll().forEach(courses::add);
        return courses;
    }

    public CourseModel getCourseDetails(Long courseId){
        return courseRepository.findById(courseId).get();
    }

    public boolean deleteCourse(Long courseId){
        try{
            courseRepository.deleteById(courseId);
            return true;
        }
        catch(Exception e){
            return false;
        }
    }

    public boolean updateCourse(CourseModel course){
        try{
            courseRepository.save(course);
            return true;
        }
        catch(Exception e){
            return false;
        }
    }

}
