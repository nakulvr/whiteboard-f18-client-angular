import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses() {
    return fetch('http://localhost:8080/api/user/7/course')
      .then(response => response.json());
  }
  findCourseById(courseId) {

  }
  createCourse(course) {

  }
  deleteCourse(courseId) {

  }
}
