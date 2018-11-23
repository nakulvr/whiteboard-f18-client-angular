export class ModuleServiceClient {
  // MODULE_URL = 'http://localhost:8080';
  MODULE_URL = 'https://whiteboard-nakul-server-java.herokuapp.com/';
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL + '/api/user/7/course/' + courseId + '/module')
      .then(response => response.json());
  }
  findModuleById(courseId, moduleId) {
    return fetch(this.MODULE_URL + '/api/user/7/course/' + courseId + '/module/' + moduleId)
      .then(response => response.json());
  }
}
