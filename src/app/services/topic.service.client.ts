export class TopicServiceClient {
  WHITEBOARD_URL = 'http://localhost:8080';
  findTopicsForLesson(courseId, moduleId, lessonId) {
    return fetch(this.WHITEBOARD_URL + '/api/user/7/course/' + courseId + '/module/'
      + moduleId + '/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }
}
