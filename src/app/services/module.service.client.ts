export class ModuleServiceClient {
  MODULE_URL = 'http://localhost:8080';
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL + '/api/user/7/course/' + courseId + '/module')
      .then(response => response.json());
  }
}