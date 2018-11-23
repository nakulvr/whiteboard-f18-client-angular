import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  // COURSE_API_URL = 'http://localhost:8080';
  COURSE_API_URL = 'https://whiteboard-nakul-server-java.herokuapp.com/';
  findAllCourses() {
    return fetch(this.COURSE_API_URL + '/api/user/7/course')
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_API_URL + '/api/user/7/course/' + courseId)
      .then(response => response.json());
  }
  createCourse(course) {

  }
  deleteCourse(courseId) {

  }
}
