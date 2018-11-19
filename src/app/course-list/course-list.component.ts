import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  title = 'default title';
  courses = [
    {title: 'CS5200', id: 123},
    {title: 'CS5610', id: 234},
    {title: 'CS3200', id: 345},
    {title: 'CS4550', id: 456}
  ];

  constructor(private courseService: CourseServiceClient) { }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(course => this.courses = course);
  }
  addCourse(title) {
    const course = {
      id: (new Date()).getTime(),
      title: title
    };
    this.title = '';
    this.courses.push(course);
    // console.log(title);
  }

  deleteCourse(deletedCourse) {
    // this.courses = this.courses.filter(course =)
    this.courses = this.courses.filter(course => course.id !== deletedCourse.id);
  }
}
