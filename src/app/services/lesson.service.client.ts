export class LessonServiceClient {
  // WHITEBOARD_URL = 'http://localhost:8080';
  WHITEBOARD_URL = 'https://whiteboard-nakul-server-java.herokuapp.com/';
  findLessonsForModule(courseId, moduleId) {
    return fetch(this.WHITEBOARD_URL + '/api/user/7/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
