export class CourseNavigatorServiceClient {
COURSE_API_URL = 'http://localhost:8080';
  findAllCourses() {
    return fetch(this.COURSE_API_URL + '/api/user/7/course/')
      .then(response => response.json());
  }
  findModulesForCourses(courseId) {
    return fetch(this.COURSE_API_URL + '/api/user/7/course/' + courseId + '/module')
      .then(response => response.json());
  }
  findLessonsForModules(courseId, moduleId) {
    return fetch(this.COURSE_API_URL + '/api/user/7/course/' + courseId + '/module/'
    + moduleId + '/lesson')
      .then(response => response.json());
  }
  findTopicsForLessons(courseId, moduleId, lessonId) {
    return fetch(this.COURSE_API_URL + '/api/user/7/course/' + courseId + '/module/'
      + moduleId + '/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }
  findWidgetsForTopics(courseId, moduleId, lessonId, topicId) {
    // return fetch(this.COURSE_API_URL + '/api/user/7/course/' + courseId + '/module/'
    //   + moduleId + '/lesson/' + lessonId + '/topic/' + topicId + '/widget')
    //   .then(response => response.json());
    return fetch(this.COURSE_API_URL + '/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
