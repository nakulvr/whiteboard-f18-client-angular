import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../services/course-navigator.service.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private courseService: CourseNavigatorServiceClient) { }

  courses = [];
  courseId = '';
  modules = [];
  moduleId = '';
  lessons = [];
  lessonId = '';
  topics = [];
  topicId = '';
  widgets = [];
  selectCourse(courseId) {
    this.courseService.findModulesForCourses(courseId)
      .then(modules => this.modules = modules);
    this.courseId = courseId;
  }
  selectModule(moduleId) {
    this.courseService.findLessonsForModules(this.courseId, moduleId)
      .then(lessons => this.lessons = lessons);
    this.moduleId = moduleId;
  }
  selectLesson(lessonId) {
    this.courseService.findTopicsForLessons(this.courseId, this.moduleId, lessonId)
      .then(topics => this.topics = topics);
    this.lessonId = lessonId;
  }
  selectTopic(topicId) {
    this.courseService.findWidgetsForTopics(this.courseId, this.moduleId, this.lessonId, topicId)
      .then(widgets => this.widgets = widgets);
    this.topicId = topicId;
  }
  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }
}
